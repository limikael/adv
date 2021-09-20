<?php

namespace adv;

require_once __DIR__."/../utils/AjaxHandler.php";

class AjaxController extends AjaxHandler {
	protected function __construct() {
		parent::__construct("adv");
	}

	public function getStory($params) {
		header('Access-Control-Allow-Origin: *');

		$adventure=Adventure::findOne($params["id"]);

		return $adventure->post_content;
	}
}