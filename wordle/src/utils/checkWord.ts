const checkWord = (word: string, solution: string) => {
  const WORD_LENGTH = 5;
  const color = Array(5).fill("") as string[];

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word.charAt(i) === solution.charAt(i)) {
      color[i] = "green";
      word = word.replace(word.charAt(i), "?");
    }
  }

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word.charAt(i) === "?") continue;
    if (solution.includes(word.charAt(i))) {
      color[i] = "yellow";
      word = word.replace(word.charAt(i), "?");
    } else {
      color[i] = "gray";
      word = word.replace(word.charAt(i), "?");
    }
  }

  return color;
};

export default checkWord;
