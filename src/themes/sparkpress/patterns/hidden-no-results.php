<?php
/**
 * Title: Hidden No Results Content
 * Slug: sparkpress/hidden-no-results-content
 * Inserter: no
 */

$context = Timber::context();
$context['message'] = esc_html_x( "Couldn't find what you were looking for? Please try again with some different keywords.", 'Message explaining that there are no results returned from a search', 'sparkpress' );
$context['search_label'] = esc_attr_x( 'Search', 'label', 'sparkpress' );
$context['search_placeholder'] = esc_attr_x( 'Search...', 'placeholder for search field', 'sparkpress' );

Timber::render( 'patterns/no-results.twig', $context );
