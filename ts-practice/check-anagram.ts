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

const checkAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  const map1 = {};
  const map2 = {};

  for (const letter of str1) {
    map1[letter] = (map1[letter] || 0) + 1;
  }

  for (const letter of str2) {
    map2[letter] = (map2[letter] || 0) + 1;
  }

  for (const key in map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};

const checkAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  const map: Record<string, number> = {};

  for (const letter of str1) {
    map[letter] = (map[letter] || 0) + 1;
  }

  for (const letter of str2) {
    if (!map[letter]) return false; // covers the case where letter is not in map and where the count is 0 but we encounter that letter again
    map[letter]--; // decrementing the count ensures exact matching
  }

  return true;
};

// O(n) time complexity (two passes over strings: one build, one check).
// O(k) space complexity, where k = unique characters in the frequency map.
