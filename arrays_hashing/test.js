const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

const groupAnagram = (strs) => {
  const result = {};

  strs.forEach((word) => {
    let strObj = {};

    for (let char of word) {
      strObj[char] = (strObj[char] || 0) + 1;
    }

    let key = Object.keys(strObj)
      .sort()
      .map((key) => `${key}${strObj[key]}`)
      .join("");

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(word);
  });
  return Object.values(result);
};

console.log(groupAnagram(strs));
