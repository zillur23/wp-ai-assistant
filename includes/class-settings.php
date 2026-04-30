<?php

class WPAI_Settings {

    public function __construct() {
        add_action('admin_init', [$this, 'register']);
    }

    public function register() {
        register_setting('wpai_settings', 'wpai_provider');
        register_setting('wpai_settings', 'wpai_model');
    }
}