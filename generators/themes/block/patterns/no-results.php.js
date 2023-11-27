export const getNoResultsPattern = ({slug}) => `<?php
/**
 * Title: No Results Content
 * Slug: ${slug}/no-results
 * Inserter: no
 */

$context = Timber::context();
$context['message'] = esc_html_x( "Couldn't find what you were looking for? Please try again with some different keywords.", 'Message explaining that there are no results returned from a search', '${slug}' );
$context['search_label'] = esc_attr_x( 'Search', 'label', '${slug}' );
$context['search_placeholder'] = esc_attr_x( 'Search...', 'placeholder for search field', '${slug}' );

Timber::render( 'patterns/no-results.twig', $context );
`;
