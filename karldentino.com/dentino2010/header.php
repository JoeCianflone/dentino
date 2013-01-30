<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Dentino2010
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title>
<?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );

	?></title>
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
      	<meta name="robots" content="index, follow" />
		<!--[if IE]>
			<meta name="MSSmartTagsPreventParsing" content="TRUE" />
			<meta http-equiv="imagetoolbar" content="no" />
		<![endif]-->
    	<script src="<?php bloginfo('template_directory');?>/_scripts/jquery.1.4.4.min.js"></script>

		<script type="text/javascript" src="<?php bloginfo('template_directory');?>/mediaplayer/jwplayer.js"></script>
		<script src="<?php bloginfo('template_directory');?>/_scripts/main.js"></script>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
		<div id="wrapper">
			<img id="logo" src="<?php bloginfo('template_directory');?>/_images/logo.png" alt="Karl Dentino &ndash; Ragtime Blues Guitar" />