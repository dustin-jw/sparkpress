export const getFunctionsPHP = ({useDynamicPatterns, scaffoldSCSS, scaffoldJS, functionPrefix, slug}) => `<?php
/**
 * Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */
${useDynamicPatterns ? `
/**
 * Twig / Timber templating.
 */
use Twig\\Extra\\String\\StringExtension;
use Twig\\Extra\\Html\\HtmlExtension;
Timber\\Timber::init();

/**
 * Adds Twig extensions to the Twig environment to enhance functionality:
 * Adds StringExtension (string-extra).
 * Adds HtmlExtension (html-extra).
 *
 * @param \\Twig\\Environment $twig - The Twig environment to which extensions are added.
 * @return \\Twig\\Environment The Twig environment with added extensions.
 */
function add_to_twig( $twig ) {
	$twig->addExtension( new StringExtension() );
	$twig->addExtension( new HtmlExtension() );
	return $twig;
}
add_filter( 'timber/twig', 'add_to_twig' );
` : ''}${scaffoldSCSS || scaffoldJS ? `
if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}
` : ''}${scaffoldSCSS ? `
/**
 * Enqueue styles for the theme.
 */
function ${functionPrefix}_theme_styles() {
	wp_enqueue_style( '${slug}-theme', get_template_directory_uri() . '/${slug}-theme.css', array(), _S_VERSION );
}
add_action( 'wp_enqueue_scripts', '${functionPrefix}_theme_styles' );
` : ''}${scaffoldJS ? `
/**
 * Enqueue scripts for the theme.
 */
function ${functionPrefix}_theme_scripts() {
	wp_enqueue_script( '${slug}-theme', get_template_directory_uri() . '/${slug}-theme.js', array(), _S_VERSION, true );
}
add_action( 'wp_enqueue_scripts', '${functionPrefix}_theme_scripts' );
` : ''}`;
