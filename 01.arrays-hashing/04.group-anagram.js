// Group Anagrams
// Medium

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]

// Example 3:
// Input: strs = [""]
// Output: [[""]]

// // Constraints:
// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

const groupAnagram = (strs) => {
  const result = {}; // Step 1: Create an empty object to store groups

  strs.forEach((item) => {
    let charCount = {}; // Step 2: Create an empty object for letter counts

    // Step 3: Count occurrences of each character
    for (let char of item) {
      charCount[char] = (charCount[char] || 0) + 1; // e.g. for the string "act" this becomes { a: 1, c: 1, t: 1 }
    }

    // Step 4: Generate a unique key for this word
    const key = Object.keys(charCount) // e.g. for "act" this returns ["a", "c", "t"]
      .sort() // ensures that anagrams with the same letters in different orders will produce the same key.
      .map((char) => `${char}${charCount[char]}`) // e.g. returns ["a1", "c1", "t1"]
      .join(""); // for "act" this becomes "a1c1t1"

    // Step 5: Group words by their key
    if (!result[key]) {
      result[key] = []; // Create an empty array if key doesn’t exist, e.g. { "a1c1t1": [] }
    }
    result[key].push(item); // Add the word to its group, e.g. { "a1c1t1": ["act"] }
  });

  return Object.values(result); // Step 6: Return only the grouped values
};

console.log(groupAnagram(strs));
