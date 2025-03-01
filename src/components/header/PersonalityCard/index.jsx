import { Row, StyledLabel } from "../../../globalStyles";
import { StyledPersonalityCard } from "./styles";
export const PersonalityCard = ({ personality, onClick }) => {
  return (
    <StyledPersonalityCard onClick={onClick}>
      <Row
        style={{
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <img
          src={personality.image}
          style={{
            width: 60,
            height: 60,
            objectFit: "cover",
          }}
        />
        <StyledLabel
          style={{
            cursor: "pointer",
            fontSize: 1.5 + "rem",
          }}
        >
          {personality.name}
        </StyledLabel>
      </Row>
    </StyledPersonalityCard>
  );
};
