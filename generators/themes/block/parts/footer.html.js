export const getFooterPart = ({slug}) => `<!-- wp:pattern {"slug":"${slug}/footer"} /-->
`;

export const getFooterPartWithoutPatterns = ({name}) => `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph -->
		<p>&copy; ${new Date().getFullYear()} | ${name}</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
`;
