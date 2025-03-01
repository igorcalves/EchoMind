import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledPersonalityContainer } from "../PersonalityContainer/styles";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Row, StyledLabel, StyledTitle } from "../../globalStyles";
export const PersonalityDescription = ({ personality, onClose }) => {
  return (
    <StyledPersonalityContainer
      style={{
        flex: 1,
      }}
    >
      <Row
        style={{
          justifyContent: "flex-end",
        }}
      >
        <FontAwesomeIcon
          icon={faClose}
          fontSize="2rem"
          style={{
            cursor: "pointer",
          }}
          onClick={onClose}
        />
      </Row>
      <StyledTitle>{personality.name}</StyledTitle>
      <StyledLabel>{personality.description}</StyledLabel>
    </StyledPersonalityContainer>
  );
};
