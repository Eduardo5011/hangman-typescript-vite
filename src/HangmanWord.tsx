const HangmanWord = () => {
  const word = "test";
  const guestLetters = ["t",]
  return (
    <div className="uppercase flex gap-2 text-[6rem] font-bold font-mono">
      {word.split("").map((letter, index) => (
        <span className="border-b-[5px] border-black">
          <span className={`${guestLetters.includes(letter) ? '' : 'invisible'}`}>{letter}</span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
