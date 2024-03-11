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

const Keyboard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2">
      {KEYS.map((key) => (
        <button key={key} className={`${styles.btn}`}>
          {key}
        </button>
      ))}
    </div>
  );
};
export default Keyboard;
