import { PersonalityCard } from "../header/PersonalityCard";
import { StyledPersonalityCard } from "../header/PersonalityCard/styles";
import { StyledPersonalityContainer } from "./styles";
import { personality } from "../../data/Personality";
export const PersonalityContainer = ({ setSelectedPersonality }) => {
  return (
    <StyledPersonalityContainer>
      {personality.map((personality) => (
        <PersonalityCard
          key={personality.id}
          personality={personality}
          onClick={() => setSelectedPersonality(personality)}
        />
      ))}
    </StyledPersonalityContainer>
  );
};
