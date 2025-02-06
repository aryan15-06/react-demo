import { useLocation, Link } from "react-router-dom";
import Maskedtext from "../maskedtext/MaskedText";
import LetterButtons from "../Letterbuttons/LetterButtons";
import { useState } from "react";

function Playgame() {
  const { state } = useLocation();

  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleLetterClick(letter) {
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1>Play Game</h1>
      <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters} />
      <div>
        <LetterButtons
          text={state.wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>

      <Link to="/start" className="text-blue-400">
        Start Game link
      </Link>
    </>
  );
}

export default Playgame;
