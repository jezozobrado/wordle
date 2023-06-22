import { useCallback, useEffect, useMemo, useState } from "react";
import Line from "./Line";
import LETTERS from "../constants/letters";

const Tile = () => {
  const word = "stare";

  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [row, setRow] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log("before", e.code);
      if (LETTERS.includes(e.code)) {
        console.log("after", e.code);
        setGuesses((prev) => prev.splice(row, 1, prev[row] + e.key));
      }
    },
    [row]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="line-container">
      {guesses.map((guess, i) => (
        <Line key={i} guess={guess} isBlank={true} />
      ))}
    </div>
  );
};
export default Tile;
