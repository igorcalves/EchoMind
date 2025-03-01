import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Main = styled.main`
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

export const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
`;

export const StyledLabel = styled.label`
  color: black;
  font-size: 1.6rem;
  font-weight: 400;
`;
