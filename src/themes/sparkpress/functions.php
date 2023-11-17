<?php
/**
 * Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Enqueue styles for the theme.
 */
function sparkpress_theme_styles() {
	wp_enqueue_style( 'sparkpress-theme', get_template_directory_uri() . '/sparkpress-theme.css', array(), _S_VERSION );
}
add_action( 'wp_enqueue_scripts', 'sparkpress_theme_styles' );

/**
 * Enqueue scripts for the theme.
 */
function sparkpress_theme_scripts() {
	wp_enqueue_script( 'sparkpress-theme', get_template_directory_uri() . '/index.js', array(), _S_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'sparkpress_theme_scripts' );
