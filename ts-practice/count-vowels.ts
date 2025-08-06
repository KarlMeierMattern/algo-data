// Write a function that takes a string as input and returns an object showing how many times each vowel appears

// countVowels("Web Development")
// // { e: 3, o: 1 }

// countVowels("hello world")
// // { e: 1, o: 2 }

const countVowels = (str: string): Record<string, number> => {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  const cleanedStr = str
    .replace(/[^a-z]/gi, "")
    .toLocaleLowerCase()
    .split("");
  const count: Record<string, number> = {};

  for (const word of cleanedStr) {
    if (vowels.includes(word)) {
      count[word] = (count[word] || 0) + 1;
    }
  }

  return count;
};

console.log(countVowels("Hello world"));
