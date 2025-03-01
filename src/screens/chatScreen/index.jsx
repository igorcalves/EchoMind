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

export const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const { selectedPersonality } = location.state || {};

  const handleSendMessage = () => {
    console.log(selectedPersonality);

    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text:
              "Esta é uma resposta automática de " + selectedPersonality.name,
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
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
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};
