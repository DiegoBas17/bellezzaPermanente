import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import TrattamentiPage from "./components/trattamenti/TrattamentiPage";
import CorsiPage from "./components/corsi/CorsiPage";
import LoStudioPage from "./components/loStudio/LoStudioPage";
import ContattiPage from "./components/contatti/ContattiPage";
import AreaClientiPage from "./components/areaClienti/AreaClientiPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trattamenti" element={<TrattamentiPage />} />
          <Route path="/corsi" element={<CorsiPage />} />
          <Route path="/il-nostro-studio" element={<LoStudioPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/area-clienti" element={<AreaClientiPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
