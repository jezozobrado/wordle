import { useCallback, useEffect, useRef, useState } from "react";
import Line from "./Line";
import LETTERS from "../constants/letters";
import five from "../utils/five";
import unFive from "../utils/unFive";

const Tile = () => {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill("?????"));
  const row = useRef(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (LETTERS.includes(e.code)) {
      setGuesses((guesses) =>
        guesses.map((guess, i) => {
          if (i === row.current && unFive(guess).length < 5)
            return five(unFive(guess) + e.key);
          return guess;
        })
      );
    } else if (e.code === "Backspace" || e.code === "Delete") {
      setGuesses((guesses) =>
        guesses.map((guess, i) => {
          if (i === row.current) return five(unFive(guess).slice(0, -1));
          return guess;
        })
      );
    } else if (e.code === "Enter") {
      row.current = row.current + 1;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyDown(e));
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
