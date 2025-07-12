// You have a list of comments:

import { arrayBuffer } from "stream/consumers";

const comments = [
  "Nice article!",
  "Very helpful, thanks.",
  "Great explanation.",
  "Loved the code examples.",
];

// Write a function to reverse this array in-place (mutate the original array using two pointers).
// No array.reverse() allowed.
// Use two indexes and a while loop.

// [
//   "Loved the code examples.",
//   "Great explanation.",
//   "Very helpful, thanks.",
//   "Nice article!",
// ];

const reverseArray = (array: Array<string>): Array<string> => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
  return array;
};

console.log(reverseArray(comments));

// This technique is good for:
// Reversing arrays (no extra memory used)
// Finding pairs that match target (faster than nested loops)
// Shrinking windows (used in sliding window problems)
