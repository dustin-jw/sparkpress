export const getPageTemplate = ({supportComments}) => `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main"} -->
<main class="wp-block-group">
	<!-- wp:group {"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:post-featured-image {"isLink":true,"width":"100%","height":"clamp(15vw, 30vh, 400px)","align":"wide","style":{"layout":{"selfStretch":"fit","flexSize":null}}} /-->
		<!-- wp:post-title {"level":1} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:post-content {"layout":{"type":"constrained"}} /-->${supportComments ? `
	<!-- wp:template-part {"slug":"comments","tagName":"section"} /-->` : ''}
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;
