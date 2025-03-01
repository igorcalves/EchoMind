import { PersonalityContainer } from "../components/PersonalityContainer";
import { PersonalityDescription } from "../components/PersonalityDescription";
import { Container, Row, StyledLabel } from "../globalStyles";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const PersonalityScreen = ({
  selectedPersonality,
  setSelectedPersonality,
}) => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chat", { state: { selectedPersonality } });
  };

  return (
    <>
      <Row
        style={{
          height: "calc(100vh - 130px)",
          padding: "1rem",
          gap: "3rem",
        }}
      >
        <PersonalityContainer setSelectedPersonality={setSelectedPersonality} />
        {selectedPersonality ? (
          <PersonalityDescription
            personality={selectedPersonality}
            onClose={() => setSelectedPersonality(null)}
          />
        ) : (
          <Container
            style={{
              flex: 1,
            }}
          >
            <StyledLabel>Selecione uma personalidade </StyledLabel>
          </Container>
        )}
      </Row>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        {selectedPersonality && (
          <PrimaryButton onClick={goToChat}>Gerar Personalidade</PrimaryButton>
        )}
      </Row>
    </>
  );
};
