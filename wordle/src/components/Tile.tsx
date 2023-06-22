import { useCallback, useEffect, useState } from "react";
import Line from "./Line";
import LETTERS from "../constants/letters";
import five from "../utils/five";
import unFive from "../utils/unFive";

const Tile = () => {
  const word = "stare";

  const [guesses, setGuesses] = useState<string[]>(Array(6).fill("?????"));
  const [row, setRow] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (LETTERS.includes(e.code)) {
        setGuesses((guesses) =>
          guesses.map((guess, i) => {
            if (i === row && unFive(guess).length < 5) {
              const realWord = unFive(guess);
              return realWord.length ? five(realWord + e.key) : five(e.key);
            }
            return guess;
          })
        );
      } else if (e.code === "Backspace" || e.code === "Delete") {
        setGuesses((guesses) =>
          guesses.map((guess, i) => {
            if (i === row) {
              const realWord = unFive(guess);
              return five(realWord.slice(0, -1));
            }
            return guess;
          })
        );
      }
    },
    [row]
  );

  window.addEventListener("keydown", handleKeyDown);

  return (
    <>
      <div className="line-container">
        {guesses.map((guess, i) => (
          <Line key={i} guess={guess} />
        ))}
      </div>
    </>
  );
};
export default Tile;
