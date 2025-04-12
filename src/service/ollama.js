export const sendMessageToOllama = async (message, updateMessages) => {
  try {
    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3",
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = ""; // Armazena o conteúdo completo da mensagem

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n").filter((line) => line.trim() !== "");

      for (const line of lines) {
        try {
          const parsed = JSON.parse(line);
          if (parsed.message?.content) {
            result += parsed.message.content;
          }

          updateMessages(result);

          if (parsed.done) {
            return result;
          }
        } catch (error) {
          console.error("Error parsing stream chunk:", error);
        }
      }
    }

    console.log("Final result:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Repassa o erro para o componente
  }
};
