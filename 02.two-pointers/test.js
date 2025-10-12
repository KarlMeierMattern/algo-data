// You are given an array of non-negative integers height,
// where each element represents the height of a vertical line drawn on the x-axis.
// Find two lines that together with the x-axis form a container that holds the most water.

// maxArea([1,8,6,2,5,4,8,3,7]); // 49

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let maxArea = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax < rightMax) {
      maxArea += leftMax - height[left];
      left++;
    } else {
      maxArea += rightMax - height[right];
      right--;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 2, 6, 3, 7]));
