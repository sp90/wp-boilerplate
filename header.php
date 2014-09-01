<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width" />
		<title><?php wp_title( ' | ', true, 'right' ); ?></title>
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<div id="content" class="snap-drawers">
			<nav id="menu" role="navigation">
				<div id="search">
					<?php get_search_form(); ?>
				</div>
				<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
			</nav>
		</div>
		<div id="wrapper" class="hfeed snap-content">
			<header id="header" role="banner">
				<a href="#" id="open-left">
					<span></span>
					<span></span>
					<span></span>
				</a>
				<section id="branding">
				    <div class="logo">
				        <img src="<?php echo get_template_directory_uri(); ?>/public/images/silentium-logo.png" />
				    </div>
					<div id="site-title"><?php if ( ! is_singular() ) { echo '<h1>'; } ?><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="h1" title="<?php esc_attr_e( get_bloginfo( 'name' ), 'blankslate' ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a><?php if ( ! is_singular() ) { echo '</h1>'; } ?></div>
					<!--<div id="site-description"><?php bloginfo( 'description' ); ?></div>-->
				</section>
			</header>
			<div id="container">