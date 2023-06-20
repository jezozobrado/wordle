import { useState } from "react";
import Line from "./Line";

const Tile = () => {
  const word = "stare";

  const [guesses, setGuesses] = useState(Array(5).fill(""));

  return (
    <div className="line-container">
      {guesses.map((guess, i) => (
        <Line key={i} guess={guess} isBlank={true} />
      ))}
    </div>
  );
};
export default Tile;
