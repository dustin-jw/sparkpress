<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * This has been slightly modified (to read environment variables).
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// a helper function to lookup "env_FILE", "env", then fallback
if ( ! function_exists( 'get_env_var' ) ) {
	/**
	 * Get value from .env file or fall back to a default value.
	 *
	 * @param {string} $env  Environment variable key.
	 * @param {string} $fallback  Fallback value if key is not set in .env file.
	 */
	function get_env_var( $env, $fallback ) {
		$file_env = getenv( $env . '_FILE' );
		if ( $file_env ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			return rtrim( file_get_contents( $file_env ), "\r\n" );
		}

		$val = getenv( $env );
		if ( false !== $val ) {
			return $val;
		}

		return $fallback;
	}
}

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', get_env_var( 'MYSQL_DATABASE', 'exampledb' ) );

/** Database username */
define( 'DB_USER', get_env_var( 'MYSQL_USER', 'exampleuser' ) );

/** Database password */
define( 'DB_PASSWORD', get_env_var( 'MYSQL_PASSWORD', 'examplepass' ) );

/** Database hostname */
define( 'DB_HOST', get_env_var( 'MYSQL_HOST', 'db' ) );

/** Database charset to use in creating database tables. Don't change this if in doubt. */
define( 'DB_CHARSET', get_env_var( 'MYSQL_CHARSET', 'utf8' ) );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', get_env_var( 'MYSQL_COLLATE', '' ) );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', get_env_var( 'WORDPRESS_AUTH_KEY', 'put your unique phrase here' ) );
define( 'SECURE_AUTH_KEY', get_env_var( 'WORDPRESS_SECURE_AUTH_KEY', 'put your unique phrase here' ) );
define( 'LOGGED_IN_KEY', get_env_var( 'WORDPRESS_LOGGED_IN_KEY', 'put your unique phrase here' ) );
define( 'NONCE_KEY', get_env_var( 'WORDPRESS_NONCE_KEY', 'put your unique phrase here' ) );
define( 'AUTH_SALT', get_env_var( 'WORDPRESS_AUTH_SALT', 'put your unique phrase here' ) );
define( 'SECURE_AUTH_SALT', get_env_var( 'WORDPRESS_SECURE_AUTH_SALT', 'put your unique phrase here' ) );
define( 'LOGGED_IN_SALT', get_env_var( 'WORDPRESS_LOGGED_IN_SALT', 'put your unique phrase here' ) );
define( 'NONCE_SALT', get_env_var( 'WORDPRESS_NONCE_SALT', 'put your unique phrase here' ) );
// (See also https://wordpress.stackexchange.com/a/152905/199287)

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
$table_prefix = get_env_var( 'WORDPRESS_TABLE_PREFIX', 'wp_' );

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', ! ! get_env_var( 'WORDPRESS_DEBUG', '' ) );

/* Add any custom values between this line and the "stop editing" line. */

/** Set the default theme to use. */
define( 'WP_DEFAULT_THEME', get_env_var( 'WORDPRESS_DEFAULT_THEME', 'sparkpress' ) );

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also https://wordpress.org/support/article/administration-over-ssl/#using-a-reverse-proxy
// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
if ( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && strpos( $_SERVER['HTTP_X_FORWARDED_PROTO'], 'https' ) !== false ) {
	$_SERVER['HTTPS'] = 'on';
}
// (we include this by default because reverse proxying is extremely common in container environments)

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
