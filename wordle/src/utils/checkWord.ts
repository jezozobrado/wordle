const checkWord = (word: string, solution: string) => {
  const WORD_LENGTH = 5;
  const color = Array(5).fill("") as string[];

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word.charAt(i) === solution.charAt(i)) {
      color[i] = "green";
      word = word.slice(0, i) + "?" + word.slice(i + 1);
      solution = solution.slice(0, i) + "?" + solution.slice(i + 1);
    }
  }
  console.log(word);
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word.charAt(i) === "?") continue;
    if (solution.includes(word.charAt(i))) {
      color[i] = "yellow";
      word = word.slice(0, i) + "?" + word.slice(i + 1);
      solution = solution.replace(word.charAt(i), "?");
    } else {
      color[i] = "gray";
      word = word.slice(0, i) + "?" + word.slice(i + 1);
    }
  }

  return color;
};

export default checkWord;
