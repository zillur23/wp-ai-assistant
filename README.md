# wp-ai-assistant
=== WP AI Assistant ===
Contributors: zillur
Tags: ai, chatbot, content generator, wordpress ai, ollama, openai
Requires at least: 5.8
Tested up to: 6.5
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

AI Assistant for WordPress. Generate content, support replies, and code using Ollama (local AI) or OpenAI.

== Follow this to run the code Via Ollama and Wordpress Plugin ==

1. First install the ollama on your machine and download the model you want to work with.
2. Run Server.js via the Node and you must config the server. It will work as Ollama local API requests.
3. Activate the plugin and use it. The response will be slower or faster based on your machine.

******Follow Full Guide for Activate *******
********************************************
###STEP 1: Install Ollama

👉 Download from: [https://ollama.com](https://ollama.com/)
bash:: ollama run llama3

Testing of API
curl http://localhost:11434/api/generate-d'{
  "model": "llama3",
  "prompt": "Write a blog intro about WordPress"
}'

###STEP 2: Create Local API Server (Node.js)

Download the "server.js" file and install the dependencies and put this on seperate directory on your machine and run the server. You need to define of your own.
 model: "codellama:latest",
 change it to 
  model: "your-own-model",
  
Install dependencies:

```
bash:: npm init-y
bash:: npm install express axios cors
```
Must run the server
bash:: node server.js

###STEP 2: Make zip file and activate the plugin

== Description ==

WP AI Assistant brings AI-powered content generation directly into your WordPress dashboard.

Perfect for:
- WordPress Support Engineers
- Bloggers
- Developers
- Elementor Users

Generate:
- Blog posts
- Support replies
- Code fixes
- Product descriptions

Supports:
- Local AI via Ollama
- Cloud AI via OpenAI (Pro)

== Features ==

- AI Chat Interface inside WordPress admin
- Prompt Templates (Support, Blog, Code)
- Copy generated content
- Clean and lightweight UI
- Secure AJAX-based processing

== Pro Features ==

- OpenAI integration
- Advanced prompt templates (30+)
- Insert content directly into posts
- Prompt history
- Elementor integration
- Multi-model support

== Installation ==

1. Upload the plugin folder to `/wp-content/plugins/`
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go to "AI Assistant" in the admin menu
4. Start generating content

== Usage ==

1. Open AI Assistant from the dashboard
2. Choose a template or write your own prompt
3. Click "Generate"
4. Copy or use the output

== Requirements ==

For local AI:
- Install Ollama
- Run model (example: `ollama run llama3`)
- Ensure API runs on http://localhost:11434

For OpenAI:
- API key required (Pro version)

== FAQ ==

= Does this work without internet? =
Yes, using Ollama local models.

= Is my data secure? =
Yes. Local mode does not send data externally.

= Can I use OpenAI? =
Yes, in Pro version.

== Screenshots ==

1. AI Assistant dashboard
2. Chat interface
3. Prompt templates

== Changelog ==

= 1.0.0 =
- Initial release
- Chat UI
- Ollama integration
- Prompt templates

== Upgrade Notice ==

= 1.0.0 =
Initial release of WP AI Assistant
