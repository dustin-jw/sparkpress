export const getSearchTemplate = ({slug}) => `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:query-title {"type":"search","align":"wide"} /-->

	<!-- wp:template-part {"slug":"query-default"} /-->

	<!-- wp:pattern {"slug":"${slug}/no-results"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;

export const getSearchTemplateWithoutPatterns = () => `<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
	<!-- wp:query-title {"type":"search","align":"wide"} /-->

	<!-- wp:template-part {"slug":"query-default"} /-->

	<!-- wp:group {"align":"wide"} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph -->
		<p>Couldn't find what you were looking for? Please try again with some different keywords.</p>
		<!-- /wp:paragraph -->

		<!-- wp:search {"label":"Search","placeholder":"Search...","showLabel":false,"buttonText":"Search","buttonUseIcon":true} /-->
	</div>
	<!-- /wp:group -->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
`;
