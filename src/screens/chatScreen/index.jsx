import React, { useState } from "react";
import {
  ChatContainer,
  MessagesContainer,
  Message,
  InputContainer,
  Input,
  Button,
} from "./styles";
import { useLocation } from "react-router-dom";
import { sendMessageToOllama } from "../../service/ollama";
import { preparePrompt } from "../../service/preparePrompt";

export const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const location = useLocation();
  const { selectedPersonality } = location.state || {};

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return;

    const newMessage = {
      text: inputValue,
      sender: "user",
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    const prompt = preparePrompt(
      selectedPersonality,
      inputValue,
      updatedMessages
    );

    try {
      await sendMessageToOllama(prompt, (partialMessage) => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          const lastMessage = updatedMessages[updatedMessages.length - 1];

          if (lastMessage?.sender === "bot") {
            lastMessage.text = partialMessage;
          } else {
            updatedMessages.push({ text: partialMessage, sender: "bot" });
          }

          return updatedMessages;
        });
      });
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: Unable to fetch response.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={isLoading} // Desabilita enquanto carrega
        />
        <Button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </InputContainer>
    </ChatContainer>
  );
};
