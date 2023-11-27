export const getReadme = ({ name, authors, wordPressVersion, description, themeURI }) => `=== ${name} ===
Contributors: ${authors}
Requires at least: 6.3
Tested up to: ${wordPressVersion}
Requires PHP: 7.0
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

${description}

== Changelog ==

= 1.0 =
* Released: ${new Date().toLocaleDateString('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
})}

== Copyright ==

${name} WordPress Theme, (C) ${new Date().getFullYear()} ${themeURI}
${name} is distributed under the terms of the GNU GPL.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
`;
