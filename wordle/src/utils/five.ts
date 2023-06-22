const five = (word: string) => {
  for (let i = word.length; i < 5; i++) {
    word = word + "?";
  }

  return word;
};

export default five;
