const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

const groupAnagram = (strs) => {
  const result = {};

  strs.forEach((word) => {
    let charCount = {};

    for (let char of word) {
      charCount[char] = charCount[char] + 0 || 1;
    }

    const key = Object.keys(charCount)
      .sort()
      .map((char) => `${char}${charCount[char]}`)
      .join("");

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(word);
  });
  return Object.values(result);
};

console.log(groupAnagram(strs));
