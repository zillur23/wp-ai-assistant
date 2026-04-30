const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Base route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ POST route (your main logic)
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Incoming prompt:", prompt);

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "codellama:latest",
      prompt: prompt,
      stream: false,
    });

    console.log("Ollama response:", response.data);

    res.json({
      output: response.data.response || "No response",
    });
  } catch (error) {
    console.error("🔥 FULL ERROR:", error.message);

    if (error.response) {
      console.error("Ollama error:", error.response.data);
    }

    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
