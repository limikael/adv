<?php

namespace adv;

require_once __DIR__."/../utils/Singleton.php";
require_once __DIR__."/../utils/Template.php";
require_once __DIR__."/../controller/AdventureController.php";
require_once __DIR__."/../controller/AjaxController.php";

class AdvPlugin extends Singleton {
	private $data;

	protected function __construct() {
		AjaxController::instance();
		AdventureController::instance();

		add_action("wp_enqueue_scripts",array($this,"enqueue_scripts"));
		add_action("admin_enqueue_scripts",array($this,"enqueue_scripts"));

		$this->data=get_file_data(ADV_PATH."/adv.php",array(
			'Version'=>'Version',
			'TextDomain'=>'Text Domain'
		));
	}

	public function enqueue_scripts() {
		$resUrl=ADV_URL."/res/";
		if (isset($_REQUEST["res"]))
			$resUrl=$_REQUEST["res"];

		wp_enqueue_script("advgame",
			$resUrl."/advgame.js",
			array(),$this->data["Version"],true);

		if (is_admin()) {
			wp_enqueue_script("ace",
				$resUrl."/ace.js",
				array(),$this->data["Version"],true);

			wp_enqueue_script("adv-admin",
				$resUrl."/adv-admin.js",
				array("ace","jquery"),$this->data["Version"],true);
		}

		if (!is_admin()) {
			wp_enqueue_style("advgame-style",
				$resUrl."/advgame.css",
				array(),$this->data["Version"]);
		}

		wp_enqueue_style("adventure-style",
			$resUrl."/adventure.css",
			array(),$this->data["Version"]);
	}
}
