<?php

namespace adv;

require_once __DIR__."/../model/Adventure.php";

class AdventureController extends Singleton {
	protected function __construct() {
		Adventure::registerPostType(array(
			'supports'=>array('title','editor'),
		));

		Adventure::registerContentHandler(array($this,"renderContent"));
		Adventure::setupMessages();

		add_filter('user_can_richedit',array($this,"user_can_richedit"));
		add_filter('wp_editor_settings',array($this,"wp_editor_settings"));
	}

	public function renderContent($adventure) {
		$t=new Template(__DIR__."/../tpl/game.tpl.php");

		$vars=array(
			"storyUrl"=>add_query_arg(array(
				"action"=>"adv",
				"call"=>"getStory",
				"id"=>$adventure->ID
			),admin_url("admin-ajax.php"))
		);

		return $t->display($vars);
	}

	public function user_can_richedit($default) {
		if( get_post_type() === 'adventure') 
			return false;

		return $default;
	}

	public function wp_editor_settings($settings) {
	    $current_screen = get_current_screen();

	    if ($current_screen && $current_screen->post_type=="adventure")
		    $settings['media_buttons'] = false;

		return $settings;
	}
}