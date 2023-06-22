import { useEffect, useRef, useState } from "react";
import Line from "./Line";
import LETTERS from "../constants/letters";
import five from "../utils/five";
import unFive from "../utils/unFive";
import checkWord from "../utils/checkWord";

const Tile = () => {
  const solution = "stare";

  const [guesses, setGuesses] = useState<string[]>(Array(6).fill("?????"));
  let { current: row } = useRef(0);
  let { current: guessesCopy } = useRef(guesses);

  const [color, setColor] = useState<string[]>(Array(5).fill(""));
  const handleKeyDown = (e: KeyboardEvent) => {
    if (LETTERS.includes(e.code)) {
      setGuesses((guesses) =>
        guesses.map((guess, i) => {
          if (i === row && unFive(guess).length < 5)
            return five(unFive(guess) + e.key);
          return guess;
        })
      );
      guessesCopy = guessesCopy.map((guess, i) => {
        if (i === row && unFive(guess).length < 5)
          return five(unFive(guess) + e.key);
        return guess;
      });
    } else if (e.code === "Backspace" || e.code === "Delete") {
      setGuesses((guesses) =>
        guesses.map((guess, i) => {
          if (i === row) return five(unFive(guess).slice(0, -1));
          return guess;
        })
      );

      guessesCopy = guessesCopy.map((guess, i) => {
        if (i === row) return five(unFive(guess).slice(0, -1));
        return guess;
      });
    } else if (e.code === "Enter" && unFive(guessesCopy[row]).length === 5) {
      setColor(checkWord(guessesCopy[row], solution));
      row = row + 1;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyDown(e));
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  console.log(row);

  return (
    <>
      <div className="line-container">
        {guesses.map((guess, i) => (
          <Line key={i} line={i} row={row} guess={guess} color={color} />
        ))}
      </div>
    </>
  );
};
export default Tile;
