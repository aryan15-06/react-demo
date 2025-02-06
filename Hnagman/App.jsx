import { Routes, Route } from "react-router-dom";
import "./App.css";
import PlayGame from "./components/pages/PlayGame";
import StartGame from "./components/pages/StartGame";
import TextInputForm from "./components/textInputForm/TextInputForm";
import TextInputFormContainer from "./components/textInputForm/TextInputFormContainer";

function App() {
  return (
    // <div>
    //   <TextInputFormContainer />
    // </div>
    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="/" element={<TextInputFormContainer />} />
    </Routes>
  );
}

export default App;
