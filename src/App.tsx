import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center gap-8 mx-auto">
      <div className="text-3xl text-center">Lose Win</div>
      
    </div>
  );
}

export default App;
