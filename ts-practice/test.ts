// Write a function that takes two strings and returns true if they are anagrams of each other, false otherwise.
// 👉 An anagram means both strings contain the same letters in the same counts, just rearranged.

// isAnagram("listen", "silent");   // true
// isAnagram("hello", "world");     // false
// isAnagram("a gentleman", "elegant man"); // true (if you ignore spaces)

const checkAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  const map: Record<string, number> = {};

  for (const letter of str1) {
    map[letter] = (map[letter] || 0) + 1;
  }

  for (const letter of str2) {
    if (!map[letter]) return false;
    map[letter]--;
  }

  return true;
};

console.log(checkAnagram("listen", "silent"));
