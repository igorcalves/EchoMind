import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  background-color: #00f6c7;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #00e6b7;
  }
  &:active {
    background-color: #00d6a7;
  }
  &:focus {
    outline: none;
  }
`;
