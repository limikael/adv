<?php

namespace adv;

require_once __DIR__."/../model/Adventure.php";

class AdventureController extends Singleton {
	protected function __construct() {
		Adventure::registerPostType();
		Adventure::registerSaveHandler(array($this,"save"));
		Adventure::registerContentHandler(array($this,"renderContent"));
		Adventure::addMetaBox("Content",array($this,"contentMetaBox"));
		Adventure::setupMessages();
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

		$t->display($vars);
	}

	public function contentMetaBox($adventure) {
		$t=new Template(__DIR__."/../tpl/admin-content.tpl.php");

		$vars=array(
			"content"=>$adventure->post_content
		);

		$t->display($vars);
	}

	public function save($adventure) {
		static $saving=FALSE;

		error_log("save...");

		if (array_key_exists("adv-content",$_REQUEST) &&
				!$saving) {
			$this->inSaveHandler=TRUE;
			$adventure->post_content=$_REQUEST["adv-content"];

			$saving=TRUE;
			$adventure->save();
			$saving=FALSE;
		}
	}
}