const longestString = (string) => {
  let result = [];
  let maxLength = 0;

  for (let str of string) {
    if (result.includes(str)) {
      while (result.includes(str)) {
        result.shift(str);
      }
    }

    result.push(str);
    maxLength = Math.max(maxLength, result.length);
  }
  return maxLength;
};
