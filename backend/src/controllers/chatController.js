const { aiOpenRouter } = require("../services/chatService");

const chatController = async (req, res) => {
  try {
    const data = await aiOpenRouter(req.body);

    // Extraer texto de Open Router
    const message =
      data?.choices?.[0]?.message?.content ||
      "Lo siento, no pude generar una respuesta.";

    return res.status(200).json({
      text: message,
    });
  } catch (error) {
    console.error("Chat controller error:", error);

    return res.status(500).json({
      error: "Error processing chat request",
    });
  }
};

module.exports = { chatController };
