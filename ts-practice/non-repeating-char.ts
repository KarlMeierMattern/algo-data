// Write a function that takes a string and returns the first non-repeating character.
// If all characters repeat, return null.

// firstUniqueChar("swiss") // "w"
// firstUniqueChar("aabb") // null

// using map
const noRepeatChar = (word: string): string | null => {
  const map = new Map();

  for (const char of word) map.set(char, (map.get(char) || 0) + 1);

  for (const [char, val] of map.entries()) {
    if (val === 1) return char;
  }

  return null;
};

console.log(noRepeatChar("swiss"));

// plain object
const noRepeatChar2 = (word: string): string | null => {
  const obj: Record<string, number> = {};

  for (const char of word) obj[char] = (obj[char] || 0) + 1;

  for (const char of word) {
    if (obj[char] === 1) return char;
  }
  return null;
};

console.log(noRepeatChar2("swiss"));
