// Write a function that checks if two strings are anagrams — meaning they have the same letters in any order.

// "listen", "silent" → true
// "hello", "world"   → false
// "Debit Card", "Bad Credit" → true (ignore case and spaces)

// Ignore case
// Ignore spaces
// Match exact letter counts
// Return type: boolean

// solution 1
const buildFrequencyMap = (str: string): Record<string, number> => {
  const map: Record<string, number> = {};
  const clean = str.toLowerCase().replace(/[^a-z]/g, "");

  for (const char of clean) {
    map[char] = (map[char] || 0) + 1;
  }

  return map;
};

const checkAnagram = (word1: string, word2: string): boolean => {
  const map1 = buildFrequencyMap(word1);
  const map2 = buildFrequencyMap(word2);

  if (Object.keys(map1).length !== Object.keys(map2).length) return false;

  for (const key in map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};

console.log(checkAnagram("listen", "silent"));

// solution 2
// const formatWords = (word: string): Array<string> => {
//     return word
//       .replace(/[^a-z]\gi/, "")
//       .toLowerCase()
//       .split("")
//       .sort();
//   };

//   const checkAnagram = (word1: string, word2: string): boolean => {
//     const formattedWord1 = formatWords(word1);
//     const formattedWord2 = formatWords(word2);

//     return (
//       formattedWord1.length === formattedWord2.length &&
//       formattedWord1.every((letter, i) => letter === formattedWord2[i])
//     );
//   };

//   console.log(checkAnagram("listen", "silent"));
