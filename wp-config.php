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

// Load dotenv to read environment variables from .env file.
require __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable( __DIR__ );
$dotenv->load();

// phpcs:disable WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', $_SERVER['MYSQL_DATABASE'] ?? 'exampledb' );

/** Database username */
define( 'DB_USER', $_SERVER['MYSQL_USER'] ?? 'exampleuser' );

/** Database password */
define( 'DB_PASSWORD', $_SERVER['MYSQL_PASSWORD'] ?? 'examplepass' );

/** Database hostname */
define( 'DB_HOST', $_SERVER['MYSQL_HOST'] ?? 'db' );

/** Database charset to use in creating database tables. Don't change this if in doubt. */
define( 'DB_CHARSET', $_SERVER['MYSQL_CHARSET'] ?? 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', $_SERVER['MYSQL_COLLATE'] ?? '' );

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
define( 'AUTH_KEY', $_SERVER['WORDPRESS_AUTH_KEY'] ?? 'put your unique phrase here' );
define( 'SECURE_AUTH_KEY', $_SERVER['WORDPRESS_SECURE_AUTH_KEY'] ?? 'put your unique phrase here' );
define( 'LOGGED_IN_KEY', $_SERVER['WORDPRESS_LOGGED_IN_KEY'] ?? 'put your unique phrase here' );
define( 'NONCE_KEY', $_SERVER['WORDPRESS_NONCE_KEY'] ?? 'put your unique phrase here' );
define( 'AUTH_SALT', $_SERVER['WORDPRESS_AUTH_SALT'] ?? 'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', $_SERVER['WORDPRESS_SECURE_AUTH_SALT'] ?? 'put your unique phrase here' );
define( 'LOGGED_IN_SALT', $_SERVER['WORDPRESS_LOGGED_IN_SALT'] ?? 'put your unique phrase here' );
define( 'NONCE_SALT', $_SERVER['WORDPRESS_NONCE_SALT'] ?? 'put your unique phrase here' );
// (See also https://wordpress.stackexchange.com/a/152905/199287)

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
$table_prefix = $_SERVER['WORDPRESS_TABLE_PREFIX'] ?? 'wp_';

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
define( 'WP_DEBUG', ! ! $_SERVER['WORDPRESS_DEBUG'] ?? '' );

/* Add any custom values between this line and the "stop editing" line. */

if ( isset( $_SERVER['WORDPRESS_DEFAULT_THEME'] ) ) {
	/** Set the default theme to use. */
	define( 'WP_DEFAULT_THEME', $_SERVER['WORDPRESS_DEFAULT_THEME'] );
}

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also https://wordpress.org/support/article/administration-over-ssl/#using-a-reverse-proxy
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
