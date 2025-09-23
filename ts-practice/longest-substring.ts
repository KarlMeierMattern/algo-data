// Write a function that returns the length of the longest substring without repeating characters.

// longestUniqueSubstring("abcabcbb"); // 3 ("abc")
// longestUniqueSubstring("bbbbb");    // 1 ("b")
// longestUniqueSubstring("pwwkew");   // 3 ("wke")

// Use a Set (or Map) to track which characters are in the current window.
// Expand the right pointer until you hit a duplicate.
// When you hit a duplicate, shrink the window from the left until it’s valid again.

const longestSubstring = (str: string): number => {
  const set = new Set<string>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

console.log(longestSubstring("pwwkew"));
