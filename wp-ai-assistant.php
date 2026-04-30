<?php
/*
Plugin Name: WP AI Assistant
Description: AI Assistant for WordPress (Ollama + OpenAI)
Version: 1.0
Author: Zillur Rahman
*/

if (!defined('ABSPATH')) exit;

// Define constants
define('WPAI_PATH', plugin_dir_path(__FILE__));
define('WPAI_URL', plugin_dir_url(__FILE__));

// Includes
require_once WPAI_PATH . 'includes/class-admin.php';
require_once WPAI_PATH . 'includes/class-api.php';
require_once WPAI_PATH . 'includes/class-settings.php';

// Init
add_action('plugins_loaded', function() {
    new WPAI_Admin();
    new WPAI_API();
    new WPAI_Settings();
});