interface Props {
  guess: string;
  color: string[];
  row: number;
  line: number;
}

const Line = ({ guess, color, row, line }: Props) => {
  // console.log(line, row);
  return (
    <div className="line">
      {Array.from(guess).map((letter, i) => (
        <div key={i} className={row === line ? `box ${color[i]}` : "box"}>
          {letter === "?" ? "" : letter.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Line;
