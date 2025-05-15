const threeSum = (nums) => {
  if (nums.length < 3) return [];
  const sortedNums = nums.sort((a, b) => a - b);
  const arrThree = [];
  const target = 0;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      let remainder = target - sum;

      if (remainder > 0) {
        left++;
      } else if (remainder < 0) {
        right--;
      } else {
        arrThree.push([sortedNums[left], sortedNums[right], sortedNums[i]]);
        left++;
        right--;
        while (sortedNums[left] === sortedNums[left - 1]) left++;
        while (sortedNums[right] === sortedNums[right + 1]) right--;
      }
    }
  }
  return arrThree;
};

console.log(threeSum([-5, 4, 1, 0, 3, 2, -3]));
