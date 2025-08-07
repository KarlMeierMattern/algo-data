// Group an array of words into an object where the keys are the first letter of each word, and the values are arrays of words that start with that letter.

// const words = ["apple", "banana", "apricot", "blueberry", "cherry"];

// {
//     a: ["apple", "apricot"],
//     b: ["banana", "blueberry"],
//     c: ["cherry"]
// }

// using push
const groupByFirstLetter = (words: string[]): Record<string, string[]> => {
  const group: Record<string, string[]> = {};

  for (const word of words) {
    const firstLetter = word.charAt(0).toLowerCase();
    if (!group[firstLetter]) {
      group[firstLetter] = [];
    }
    group[firstLetter].push(word);
  }

  return group;
};

console.log(
  groupByFirstLetter(["apple", "banana", "apricot", "blueberry", "cherry"])
);

// using spread syntax
const groupByFirstLetter2 = (words: string[]): Record<string, string[]> => {
  const group: Record<string, string[]> = {};

  for (const word of words) {
    let firstWord = word.charAt(0).toLocaleLowerCase();
    if (!group[firstWord]) {
      group[firstWord] = [];
    }
    group[firstWord] = [...group[firstWord], word];
  }
  return group;
};

// using reduce
const groupByFirstLetter3 = (words: string[]): Record<string, string[]> => {
  return words.reduce((acc, word) => {
    const firstLetter = word.charAt(0).toLowerCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
  }, {});
};

console.log(
  groupByFirstLetter3(["apple", "banana", "apricot", "blueberry", "cherry"])
);
