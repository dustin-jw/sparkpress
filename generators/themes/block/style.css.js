export const getStyleCSS = ({
	name,
	themeURI,
	authors,
	authorURI,
	description,
	wordPressVersion,
	slug,
}) => `/*
Theme Name: ${name}
Theme URI: ${themeURI}
Author: ${authors}
Author URI: ${authorURI}
Description: ${description}
Requires at least: 6.3
Tested up to: ${wordPressVersion}
Requires PHP: 7.0
Version: 1.0
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
Text Domain: ${slug}
Tags: one-column, custom-colors, custom-menu, custom-logo, editor-style, featured-images, full-site-editing, block-patterns, rtl-language-support, sticky-post, threaded-comments, translation-ready, wide-blocks, block-styles, accessibility-ready, blog, portfolio, news
*/
`;
