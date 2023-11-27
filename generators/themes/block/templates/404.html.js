export const get404Template = ({slug}) => `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:pattern {"slug":"${slug}/404"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;

export const get404TemplateWithoutPatterns = () => `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:heading {"level":1,"align":"wide"} -->
	<h1 class="alignwide">404</h1>
	<!-- /wp:heading -->

	<!-- wp:group {"align":"wide","layout":{"type":"default"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph -->
		<p>This page could not be found.</p>
		<!-- /wp:paragraph -->

		<!-- wp:search {"label":"Search","placeholder":"Search...","showLabel":false,"width":100,"widthUnit":"%","buttonText":"Search","buttonUseIcon":true,"align":"center"} /-->
	</div>
	<!-- /wp:group -->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;
