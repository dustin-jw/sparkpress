FROM php:8.1-apache-buster as dev

# LABEL org.opencontainers.image.source=https://github.com/sparkbox/sparkpress-wordpress-starter

ENV WP_VERSION=6.4.1

# persistent dependencies
RUN set -eux; \
  apt-get update; \
  apt-get install -y --no-install-recommends \
  # Ghostscript is required for rendering PDF previews
  ghostscript \
  ; \
  rm -rf /var/lib/apt/lists/*

# install the PHP extensions we need (https://make.wordpress.org/hosting/handbook/handbook/server-environment/#php-extensions)
RUN set -ex; \
  \
  savedAptMark="$(apt-mark showmanual)"; \
  \
  apt-get update; \
  apt-get install -y --no-install-recommends \
  libfreetype6-dev \
  libicu-dev \
  libjpeg-dev \
  libmagickwand-dev \
  libpng-dev \
  libwebp-dev \
  libzip-dev \
  ; \
  \
  docker-php-ext-configure gd \
  --with-freetype \
  --with-jpeg \
  --with-webp \
  ; \
  docker-php-ext-install -j "$(nproc)" \
  bcmath \
  exif \
  gd \
  intl \
  mysqli \
  zip \
  ; \
  # https://pecl.php.net/package/imagick
  pecl install imagick-3.6.0; \
  docker-php-ext-enable imagick; \
  rm -r /tmp/pear; \
  \
  # some misbehaving extensions end up outputting to stdout 🙈 (https://github.com/docker-library/wordpress/issues/669#issuecomment-993945967)
  out="$(php -r 'exit(0);')"; \
  [ -z "$out" ]; \
  err="$(php -r 'exit(0);' 3>&1 1>&2 2>&3)"; \
  [ -z "$err" ]; \
  \
  extDir="$(php -r 'echo ini_get("extension_dir");')"; \
  [ -d "$extDir" ]; \
  # reset apt-mark's "manual" list so that "purge --auto-remove" will remove all build dependencies
  apt-mark auto '.*' > /dev/null; \
  apt-mark manual $savedAptMark; \
  ldd "$extDir"/*.so \
  | awk '/=>/ { so = $(NF-1); if (index(so, "/usr/local/") == 1) { next }; gsub("^/(usr/)?", "", so); print so }' \
  | sort -u \
  | xargs -r dpkg-query --search \
  | cut -d: -f1 \
  | sort -u \
  | xargs -rt apt-mark manual; \
  \
  apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false; \
  rm -rf /var/lib/apt/lists/*; \
  \
  ! { ldd "$extDir"/*.so | grep 'not found'; }; \
  # check for output like "PHP Warning:  PHP Startup: Unable to load dynamic library 'foo' (tried: ...)
  err="$(php --version 3>&1 1>&2 2>&3)"; \
  [ -z "$err" ]

# These apache modules are required and not enabled by default in this image
RUN a2enmod rewrite headers xml2enc proxy proxy_fcgi

COPY ./composer.json /var/www/html/composer.json
COPY ./composer.lock /var/www/html/composer.lock
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN composer install

# Get WordPress Files
RUN cd /tmp \
  && apt-get update -y \
  && apt-get install wget -y \
  && apt-get install zip -y \
  && wget http://wordpress.org/wordpress-${WP_VERSION}.zip \
  && unzip wordpress-${WP_VERSION}.zip \
  && rm -rf /tmp/wordpress/wp-content/themes/* \
  && rm -rf /tmp/wordpress/wp-content/plugins/* \
  && cp -avr /tmp/wordpress/* /var/www/html/. \
  && rm -rf /tmp/wordpress /tmp/wordpress-${WP_VERSION}.zip

# So we can update plugins
RUN chown -R www-data:www-data /var/www
RUN find /var/www/ -type d -exec chmod 0755 {} \;
RUN find /var/www/ -type f -exec chmod 644 {} \;

# make the linters executable so we can run them from containers
RUN chmod +x vendor/bin/phpcs
RUN chmod +x vendor/bin/phpcbf

FROM dev as prod

COPY dist/themes /var/www/html/wp-content/themes
COPY dist/plugins /var/www/html/wp-content/plugins
COPY wp-config.php /var/www/html/wp-config.php
