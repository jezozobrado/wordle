import { useCallback, useEffect, useState } from "react";
import Line from "./Line";
import LETTERS from "../constants/letters";
import five from "../utils/five";

const Tile = () => {
  const word = "stare";

  const [guesses, setGuesses] = useState(Array(6).fill("?????"));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("a");
      if (LETTERS.includes(e.code)) {
        setGuesses((guesses) =>
          guesses.map((guess, i) => {
            if (i === 0) {
              const realWord = guess.replaceAll("?", "");
              return realWord.length ? five(realWord + e.key) : five(e.key);
            }
            return guess;
          })
        );
      }
    };
    window.addEventListener("keydown", (e) => handleKeyDown(e));

    // return () => window.removeEventListener("keydown", handleKeyDown);
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
