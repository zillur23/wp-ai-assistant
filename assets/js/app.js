document.addEventListener("DOMContentLoaded", () => {
  const chat = document.getElementById("wpai-chat");
  const promptInput = document.getElementById("wpai-prompt");
  const sendBtn = document.getElementById("wpai-send");

  // Templates
  const templates = {
    support: "You are a WordPress support expert. Reply professionally:\n",
    blog: "Write a SEO-friendly blog post about:\n",
    code: "Fix and explain this code:\n",
  };

  // Apply template
  document.querySelectorAll(".template").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      promptInput.value = templates[type];
      promptInput.focus();
    });
  });

  // Add message to chat
  function addMessage(role, text) {
    const div = document.createElement("div");
    div.style.marginBottom = "10px";

    if (role === "user") {
      div.innerHTML = `<strong>You:</strong><br>${text}`;
    } else {
      div.innerHTML = `<strong>AI:</strong><br>${text}`;
    }

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send prompt
  sendBtn.addEventListener("click", async () => {
    const prompt = promptInput.value.trim();
    if (!prompt) return;

    addMessage("user", prompt);
    promptInput.value = "";

    const loading = document.createElement("div");
    loading.innerText = "⏳ Thinking...";
    chat.appendChild(loading);

    try {
      const res = await fetch(wpai.ajax_url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          action: "wpai_generate",
          nonce: wpai.nonce,
          prompt: prompt,
        }),
      });

      const data = await res.json();
      loading.remove();

      if (data.success) {
        const output = data.data.output || data.data.response || "No output";
        addMessage("ai", output);
      } else {
        addMessage("ai", "❌ Error: " + data.data);
      }

      // if (data.success) {
      //   addMessage("ai", data.data.output || JSON.stringify(data.data));
      // } else {
      //   addMessage("ai", "❌ Error: " + data.data);
      // }
    } catch (err) {
      loading.remove();
      addMessage("ai", "❌ Request failed");
    }
  });
});
