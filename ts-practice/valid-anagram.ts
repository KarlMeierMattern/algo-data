// Write a function that checks if two strings are anagrams — they must have the same characters with the same frequencies.

// validAnagram("listen", "silent"); // true
// validAnagram("hello", "bello"); // false

// using map
const validAnagram = (str1: string, str2: string): boolean => {
  const normalise = (string: string) =>
    string
      .replace(/[^a-z]/gi, "")
      .toLowerCase()
      .split("")
      .sort();

  const arr1 = normalise(str1);
  const arr2 = normalise(str2);

  if (arr1.length !== arr2.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (const ch of arr1) map1.set(ch, (map1.get(ch) || 0) + 1);
  for (const ch of arr2) map2.set(ch, (map2.get(ch) || 0) + 1);

  for (const [letter, count] of map1) {
    if (map2.get(letter) !== count) return false;
  }
  return true;
};

// console.log(validAnagram("listen", "silent"));

// using normal objects
const validAnagram2 = (str1: string, str2: string): boolean => {
  const normalise = (string: string) =>
    string
      .replace(/[^a-z]/gi, "")
      .toLowerCase()
      .split("")
      .sort();

  const arr1 = normalise(str1);
  const arr2 = normalise(str2);

  if (arr1.length !== arr2.length) return false;

  const map1: Record<string, number> = {};
  const map2: Record<string, number> = {};

  for (const ch of arr1) map1[ch] = (map1.ch || 0) + 1;
  for (const ch of arr2) map2[ch] = (map2.ch || 0) + 1;

  for (const letter in map1) {
    if (map2[letter] !== map1[letter]) return false;
  }
  return true;
};

console.log(validAnagram2("listen", "silent"));
