import styled from "styled-components";

export const StyledPersonalityCard = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #00f6c7;
  cursor: pointer;

  &:hover {
    background-color: #00e6b7;
    scale: 1.05;
  }
`;
