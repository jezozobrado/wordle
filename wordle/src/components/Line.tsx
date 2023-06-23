interface Props {
  guess: string;
  colors: string[][];
  line: number;
}

const Line = ({ guess, colors, line }: Props) => {
  return (
    <div className="line">
      {Array.from(guess).map((letter, i) => (
        <div key={i} className={`box ${colors[line][i]}`}>
          {letter === "?" ? "" : letter.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Line;
