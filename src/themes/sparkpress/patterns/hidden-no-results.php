<?php
/**
 * Title: Hidden No Results Content
 * Slug: sparkpress/hidden-no-results-content
 * Inserter: no
 */
?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( "Couldn't find what you were looking for? Please try again with some different keywords.", 'Message explaining that there are no results returned from a search', 'sparkpress' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'sparkpress' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'sparkpress' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'sparkpress' ); ?>","buttonUseIcon":true} /-->
