type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}


const HangmanWord = ({guessedLetters, wordToGuess}: HangmanWordProps) => {
  
  return (
    <div className="uppercase flex gap-2 text-[6rem] font-bold font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-[5px] border-black">
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}</span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
