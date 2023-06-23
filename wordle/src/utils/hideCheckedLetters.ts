const hideCheckedLetters = (word: string, index: number) =>
  (word = word.slice(0, index) + "?" + word.slice(index + 1));

export default hideCheckedLetters;
