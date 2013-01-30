				<div id="content_secondary">
					<?php if (is_page('home')):?>
						<img src="<?php bloginfo('template_url');?>/_images/img_home.jpg" alt="" />
					<?php elseif (is_page('bio-2')): ?>
						<img src="<?php bloginfo('template_url');?>/_images/img_bio.jpg" alt="" />
					<?php elseif (is_page('shows')): ?>
						<img src="<?php bloginfo('template_url');?>/_images/img_shows.jpg" alt="" />
					<?php elseif (is_page('music')): ?>
						<img src="<?php bloginfo('template_url');?>/_images/img_music.jpg" alt="" />
					<?php elseif (is_page('news')): ?>
						<img src="<?php bloginfo('template_url');?>/_images/img_news.jpg" alt="" />
					<?php elseif (is_page('links')): ?>
						<img src="<?php bloginfo('template_url');?>/_images/img_links.jpg" alt="" />
					<?php elseif (is_page('contact')): ?>
						<img src="<?php bloginfo('template_url');?>/_images/img_contact.jpg" alt="" />
					<?php endif; ?>
				</div>