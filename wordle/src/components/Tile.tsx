import { useCallback, useEffect, useState } from "react";
import Line from "./Line";
import LETTERS from "../constants/letters";
import five from "../utils/five";

const Tile = () => {
  const word = "stare";

  const [guesses, setGuesses] = useState(Array(6).fill("?????"));
  const [row, setRow] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (LETTERS.includes(e.code)) {
        setGuesses((guesses) =>
          guesses.map((guess, i) => {
            if (i === row) {
              const realWord = guess.replaceAll("?", "");
              return realWord.length ? five(realWord + e.key) : five(e.key);
            }
            return guess;
          })
        );
      } else if (e.code === "Backspace" || e.code === "Delete") {
        setGuesses((guesses) =>
          guesses.map((guess, i) => {
            if (i === row) {
              const realWord = guess.replaceAll("?", "");
              return five(realWord.slice(0, -1));
            }
            return guess;
          })
        );
      }
    };
    window.addEventListener("keydown", (e) => handleKeyDown(e));

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="line-container">
        {Object.values(guesses).map((guess, i) => (
          <Line key={i} guess={guess} isBlank={true} />
        ))}
      </div>
    </>
  );
};
export default Tile;
