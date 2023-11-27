export const getHomeTemplate = () => `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:heading {"level":1,"align":"wide"} -->
	<h1 class="wp-block-heading alignwide">Home Page Heading</h1>
	<!-- /wp:heading -->

	<!-- wp:template-part {"slug":"query-default"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;
