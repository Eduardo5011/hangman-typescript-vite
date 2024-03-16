import styles from "./keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetter: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({activeLetter, inactiveLetters, addGuessedLetter}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key)
        const inActive = inactiveLetters.includes(key)
        return <button onClick={() => addGuessedLetter(key)} key={key} className={`${styles.btn} ${isActive ? styles.active : ""}`}>
          {key}
        </button>
})}
    </div>
  );
};
export default Keyboard;
