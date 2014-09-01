<?php
	add_action( 'wp_enqueue_scripts', 'enqueue_theme_css' );
	function enqueue_theme_css(){
	    wp_enqueue_style('default',
	        get_template_directory_uri().'/public/css/app.css'
	    );
	}

	add_action( 'wp_enqueue_scripts', 'blankslate_load_scripts' );
	function blankslate_load_scripts() {
		wp_enqueue_script('script-name', 
			get_template_directory_uri().'/public/js/build/all.js' 
		);
	}
?>