// Time Complexity: O(log n)
// 	•	The array is repeatedly halved until the target is found or the interval is empty.
// 	•	At each step, the search space reduces by half, leading to O(\log n) comparisons.

// Space Complexity: O(1) (Iterative Version)
// 	•	Like linear search, no additional data structures or recursion are used. Only a few variables (left, right, mid) are maintained.

// Space Complexity: O(log n) (Recursive Version)
// 	•	In a recursive implementation, the function calls itself for each subarray, creating a new stack frame each time.
// 	•	The depth of recursion is proportional to the number of halving steps, which is O(\log n).

const binarySearch = (sortedArray, target) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) {
      return `Result found: ${target}`;
    } else if (sortedArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

const sortedArray = [10, 20, 30, 40, 50, 60, 70];
const target = 50;

console.log(binarySearch(sortedArray, target));
