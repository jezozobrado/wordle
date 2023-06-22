interface Props {
  guess: string;
}

const Line = ({ guess }: Props) => {
  return (
    <div className="line">
      {Array.from(guess).map((letter, i) => (
        <div key={i} className="box">
          {letter === "?" ? "" : letter.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Line;
