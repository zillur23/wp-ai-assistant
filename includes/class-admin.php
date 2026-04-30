<?php

class WPAI_Admin {

    public function __construct() {
        add_action('admin_menu', [$this, 'menu']);
        add_action('admin_enqueue_scripts', [$this, 'assets']);
    }

    public function menu() {
        add_menu_page(
            'AI Assistant',
            'AI Assistant',
            'manage_options',
            'wpai-assistant',
            [$this, 'render'],
            'dashicons-robot'
        );
    }

    public function render() {
        include WPAI_PATH . 'templates/admin-page.php';
    }

    public function assets() {
        wp_enqueue_script('wpai-js', WPAI_URL . 'assets/js/app.js', [], null, true);
        wp_localize_script('wpai-js', 'wpai', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wpai_nonce')
        ]);
    }
}