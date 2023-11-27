export const get404Pattern = ({slug}) => `<?php
/**
 * Title: 404
 * Slug: ${slug}/404
 * Inserter: no
 */

$context = Timber::context();
$context['heading'] = esc_html_x( '404', 'Error code for a webpage that is not found.', '${slug}' );
$context['message'] = esc_html_x( 'This page could not be found.', 'Message to convey that a webpage could not be found', '${slug}' );
$context['search_label'] = esc_attr_x( 'Search', 'label', '${slug}' );
$context['search_placeholder'] = esc_attr_x( 'Search...', 'placeholder for search field', '${slug}' );

Timber::render( 'patterns/404.twig', $context );
`;
