<?php if (is_front_page()): ?>
	<?php get_template_part('header2'); ?>
	<?php get_template_part('splash'); ?>
<?php else: ?>
	<?php get_header(); ?>
		<div id="content" class="clear">
			<div id="content_main">
				<div id="internal" class="clear">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
						<?php the_content(); ?>
					<?php endwhile; ?>
				</div>
			</div>
			<?php get_template_part('secondary'); ?>
		</div>
		<?php get_template_part('navigation'); ?>
	<?php get_footer(); ?>
<?php endif; ?>
