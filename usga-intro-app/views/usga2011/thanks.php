<!doctype html>
<html>
	<head>
		<meta charset="utf8">
		<title>An Introduction to MyClubhouse &#124; US Golf Association</title>
			
		<link rel="stylesheet" href="<?php siteinfo('path'); ?>assets/css/main.css" />
	  	<script>
			var _gaq = _gaq || [];
	    	_gaq.push(['_setAccount', "<?php echo $analytics_key; ?>"]);
	    	_gaq.push(['_trackPageview']);
	  	</script>
	</head>
	<body id="usga">
		<div id="wrapper">
			<div id="content-top"></div>
			<div id="content" class="clear">
				<div id="logo">
					<p><a href="#"><img src="<?php siteinfo('path');?>assets/images/logo_usga.png" alt="USGA" /></a></p>
				</div>
				<div id="content-main">
					<ul id="navigation-main" class="what">
						<li class="what"><a href="#" class="nav_position ir">What is Coming</a></li>
						<li class="how"><a href="#" class="nav_position ir">How You'll Use It</a></li>
						<li class="next"><a href="#" class="nav_position ir">Next Steps</a></li>												
					</ul>
				   <div id="stage">
					  <div class="slide intro" style="display: none;">
							<h1>Thank you for being a Club Member<br />Your logo has been received.</h1>
							<p>We will notify you when your Club Profile is posted and ready for your additional enhancements</p>
						</div>
					</div>
	 				<div id="controls" class="clear">
						<ul id="player-controls" class="nav clear">
							<li><a href="#" id="play" class="button ir">Play</a></li>
							<li><a href="#" id="pause" class="button ir">Pause</a></li>							
							<li><a href="<?php siteinfo('path'); ?>assets/pdf/USGAPlanningGuide.pdf" rel="external" id="print" class="button ir">Print</a></li>	
							<li><a href="#" id="send" class="button ir">Send Logo</a></li>						
						</ul>
					</div>														
				</div>
			</div>
		</div>
		<div id="content-bottom"></div>

		<div id="contact-form">
			<a href="#" class="simplemodal-close"><img src="<?php siteinfo('path'); ?>assets/images/x.png"></a>
			<?php echo validation_errors(); ?>			
			<?php echo form_open_multipart('main/process', array('id'=>'uploader')); ?>
				<h2>Send us your club logo now</h2>
				<p class="clear">
					<label id="clubhouse">Enter club name:</label>
					<input type="text" name="clubhouse" value="" id="clubhouse" class="required" />
				</p>
				<p class="clear">
					<label id="uploadit">Attach logo:</label>
					<input type="file" id="uploadit" name="uploadit" />
					<span>This logo will appear in your Club Profile.  Preferred format is .jpg or .gif, less than 10mb.</span>
				</p>				
				<p class="clear">
					<label id="email">Enter e-mail:</label>
					<input type="text" name="email" value="" id="email" class="required email" />
					<span>Please provide the e-mail address you would like us to use when we send future correspondence about My Golf House to your club.</span>
				</p>				

				<p class="clear">
					<input type="submit" value="Send Today">
				</p>
			<?php echo form_close(); ?>
		</div>
		<script src="<?php siteinfo('path');?>assets/scripts/jquery1.5.2.js"></script>
		<script src="<?php siteinfo('path');?>assets/scripts/jquery-easing.js"></script>
		<script src="<?php siteinfo('path');?>assets/scripts/jquery.simplemodal.1.4.1.min.js"></script>
		<script src="<?php siteinfo('path');?>assets/scripts/jquery.validate.min.js"></script>
		<script src="<?php siteinfo('path');?>assets/scripts/main.js"></script>
	  	<script>  (function() {
	    		var ga = document.createElement('script');     ga.type = 'text/javascript'; ga.async = true;
	    		ga.src = ('https:'   == document.location.protocol ? 'https://ssl'   : 'http://www') + '.google-analytics.com/ga.js';
	    		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	   	})();
	   </script>		
	</body>
</html>