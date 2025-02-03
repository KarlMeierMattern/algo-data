// Time Complexity: O(n)
// 	•	In the worst case, the algorithm scans all elements in the array to find the target.
// 	•	If the array has n elements, it takes n comparisons in the worst case.

// Space Complexity: O(1)
// 	•	Linear search uses no extra data structures or recursive calls, just a few variables (e.g., i, arr, target).
// 	•	The memory requirement remains constant regardless of the size of the input array.

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return `Found at index ${i}`;
    }
  }
  return "Sorry, nothing found";
};

const myArray = [50, 20, 30, 40, 60];
const target = 300;

console.log(linearSearch(myArray, target));
