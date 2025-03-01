import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  overflow: hidden;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  max-width: 60%;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  background-color: ${({ sender }) =>
    sender === "user" ? "#d4edda" : "#cce5ff"};
  text-align: ${({ sender }) => (sender === "user" ? "right" : "left")};
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
