<?php
/**
 * Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

/**
 * Twig / Timber templating.
 */
use Twig\Extra\String\StringExtension;
use Twig\Extra\Html\HtmlExtension;
Timber\Timber::init();

/**
 * Adds Twig extensions to the Twig environment to enhance functionality:
 * Adds StringExtension (string-extra).
 * Adds HtmlExtension (html-extra).
 *
 * @param \Twig\Environment $twig - The Twig environment to which extensions are added.
 * @return \Twig\Environment The Twig environment with added extensions.
 */
function add_to_twig( $twig ) {
	$twig->addExtension( new StringExtension() );
	$twig->addExtension( new HtmlExtension() );
	return $twig;
}
add_filter( 'timber/twig', 'add_to_twig' );

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
