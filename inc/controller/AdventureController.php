<?php

namespace adv;

require_once __DIR__."/../model/Adventure.php";

class AdventureController extends Singleton {
	protected function __construct() {
		Adventure::registerPostType(array(
			'supports'=>array('title'/*,'revisions'*/),
		));
		Adventure::registerSaveHandler(array($this,"save"));
		Adventure::registerContentHandler(array($this,"renderContent"));
		Adventure::addMetaBox("Content",array($this,"contentMetaBox"));
		Adventure::setupMessages();
	}

	public function renderContent($adventure) {
		$t=new Template(__DIR__."/../tpl/game.tpl.php");

		$dataAttrs=array();

		if (array_key_exists("preview",$_REQUEST)) {
			$dataAttrs["data-story-storage-key"]="adventure-preview";
		}

		else
			$dataAttrs["data-story-url"]=
				add_query_arg(array(
					"action"=>"adv",
					"call"=>"getStory",
					"id"=>$adventure->ID
				),admin_url("admin-ajax.php"));

		$vars=array(
			"dataAttrs"=>$dataAttrs
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

	public function save($adventure, $req) {
		static $saving=FALSE;

		if (array_key_exists("adv-content",$req) &&
				!$saving) {
			$saving=TRUE;
			$adventure->post_content=$req["adv-content"];
			$adventure->save();
			$saving=FALSE;
		}
	}
}