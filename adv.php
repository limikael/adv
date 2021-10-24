<?php
/**
 * Adventure Game
 *
 * Plugin Name:       adv
 * Plugin URI:        https://github.com/limikael/adv
 * Description:       Adventure Game.
 * Version:           0.0.13
 */

defined( 'ABSPATH' ) || exit;

define('ADV_URL',plugin_dir_url(__FILE__));
define('ADV_PATH',plugin_dir_path(__FILE__));

require_once(__DIR__."/inc/plugin/AdvPlugin.php");

adv\AdvPlugin::instance();
