const threeSum = (nums) => {
  // check
  if (nums.length < 3) return;

  // sort
  const sortedNums = nums.sort((a, b) => a - b);

  // store answers & target
  const triplets = [];
  let target = 0;

  // for loop
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) continue;
    let left = i + 1;
    let right = sortedNums.length - 1;
    let sum = sortedNums[left] + sortedNums[right] + sortedNums[i];
    let remainder = target - sum;

    // while
    while (left < right) {
      if (remainder > 0) {
        left++;
      } else if (remainder < 0) {
        right--;
      } else {
        triplets.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;
        while (sortedNums[left] == sortedNums[left - 1]) left++;
        while (sortedNums[right] == sortedNums[right + 1]) right--;
      }
    }
  }

  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
