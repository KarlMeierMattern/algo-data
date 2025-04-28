const nums = [0, 3, 2, 5, 4, 6, 1, 1];

const longestConsecutiveSubString = (nums) => {
  const numSet = new Set(nums);
  let longestCount = 1;
  for (let i = 0; i < nums.length; i++) {
    if (!numSet.has(nums[i] - 1)) {
      let currentNum = nums[i];
      let currentCount = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentCount++;
      }

      longestCount = Math.max(longestCount, currentCount);
    }
  }
  return longestCount;
};

console.log(longestConsecutiveSubString(nums));
