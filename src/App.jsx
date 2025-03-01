import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { PersonalityContainer } from "./components/PersonalityContainer";
import { PersonalityDescription } from "./components/PersonalityDescription";
import { PersonalityScreen } from "./screens/PersonalityScreen";
import { Main } from "./globalStyles";
import { ChatScreen } from "./screens/chatScreen";
import { useState } from "react";

function App() {
  const [selectedPersonality, setSelectedPersonality] = useState(null);

  return (
    <Router>
      <Main>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PersonalityScreen
                selectedPersonality={selectedPersonality}
                setSelectedPersonality={setSelectedPersonality}
              />
            }
          />
          <Route
            path="/chat"
            element={<ChatScreen selectedPersonality={selectedPersonality} />}
          />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
