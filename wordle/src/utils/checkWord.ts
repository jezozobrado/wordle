import hideCheckedLetters from "./hideCheckedLetters";

const checkWord = (word: string, solution: string) => {
  const WORD_LENGTH = 5;
  const color = Array(5).fill("") as string[];

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word.charAt(i) === solution.charAt(i)) {
      color[i] = "green";
      word = hideCheckedLetters(word, i);
      solution = hideCheckedLetters(solution, i);
    }
  }
  console.log(word);
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word.charAt(i) === "?") continue;
    if (solution.includes(word.charAt(i))) {
      color[i] = "yellow";
      solution = solution.replace(word.charAt(i), "?");
      word = hideCheckedLetters(word, i);

      console.log(word, solution);
    } else {
      color[i] = "gray";
      word = hideCheckedLetters(word, i);
    }
  }

  return color;
};

export default checkWord;
