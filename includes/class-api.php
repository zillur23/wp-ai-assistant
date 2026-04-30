<?php

class WPAI_API {

    public function __construct() {
        add_action('wp_ajax_wpai_generate', [$this, 'generate']);
    }

    public function generate() {

        check_ajax_referer('wpai_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error('Unauthorized');
        }

        $prompt = sanitize_textarea_field($_POST['prompt']);

        // Call Node API (Ollama bridge)
        $response = wp_remote_post('http://localhost:3000/generate', [
            'headers' => ['Content-Type' => 'application/json'],
            'body' => json_encode(['prompt' => $prompt]),
            'timeout' => 60
        ]);

        $body = wp_remote_retrieve_body($response);

        error_log("AI RAW RESPONSE: " . $body); // check debug.log

        $data = json_decode($body, true);

        if (!$data) {
            wp_send_json_error("Invalid JSON response");
        }

        wp_send_json_success($data);


        // if (is_wp_error($response)) {
        //     wp_send_json_error($response->get_error_message());
        // }

        // $body = json_decode(wp_remote_retrieve_body($response), true);

        // wp_send_json_success($body);
    }
}

// $body = json_decode(wp_remote_retrieve_body($response), true);

// $output = $body['output'] ?? $body['response'] ?? 'No output';

// wp_send_json_success([
//     'output' => $output
// ]);