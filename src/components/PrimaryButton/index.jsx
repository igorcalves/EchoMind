import { StyledPrimaryButton } from "./styles";

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <StyledPrimaryButton onClick={onClick}>{children}</StyledPrimaryButton>
  );
};
