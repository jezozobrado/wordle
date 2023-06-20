interface Props {
  guess: string;
  isBlank: boolean;
}

const Line = ({ guess, isBlank }: Props) => {
  return (
    <div className="line">
      {Array.from(guess || "?????").map((letter, i) => (
        <div key={i} className="box">
          {letter === "?" ? "" : letter.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Line;

// return (
//     <div className="line">
//       {guess.length ? (
//         <>
//           {Array.from(guess ?? "?????").map((letter, i) => (
//             <div key={i} className="box">
//               {letter.toUpperCase()}
//             </div>
//           ))}
//         </>
//       ) : (
//         <>pota</>
//       )}
//     </div>
//   );
