export const getPostMetaPart = () => `<!-- wp:group {"layout":{"type":"constrained"},"className":"clearfix"} -->
<div class="wp-block-group clearfix">
<!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group">
		<!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}},"fontSize":"small"} -->
		<div class="wp-block-group has-small-font-size">
			<!-- wp:post-date /-->
			<!-- wp:post-author-name {"isLink":true} /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}},"fontSize":"small"} -->
		<div class="wp-block-group has-small-font-size">
			<!-- wp:post-terms {"term":"category","textAlign":"right"} /-->
			<!-- wp:post-terms {"term":"post_tag","textAlign":"right"} /-->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
`;
