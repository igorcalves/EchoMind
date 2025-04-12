export const preparePrompt = (
  selectedPersonality,
  userMessage,
  messageHistory
) => {
  const personalityDescription = selectedPersonality.description;
  const personalityName = selectedPersonality.name;

  const history = messageHistory
    .map((msg) => `${msg.sender === "user" ? "Usuário" : "IA"}: ${msg.text}`)
    .join("\n");

  const prompt = `
    todas perguntat devem ser respondidas em portugues
      Você faz parte de uma personalidade chamada ${personalityName}.
      ${personalityDescription}.
      Aqui está o histórico da conversa até agora:
      ${history}
      Agora, responda à próxima mensagem do usuário com base na personalidade:
      Usuário: ${userMessage}
      Adicione comentários e piadas para deixar a conversa mais leve e divertida, baseados na sua personalidade.
      Sempre fique no personagem e nunca quebre a quarta parede.
    `;

  return prompt.trim();
};
