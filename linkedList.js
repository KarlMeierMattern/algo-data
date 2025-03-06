// ListNode {
//     val: 7,
//     next: ListNode { val: 0, next: ListNode { val: 8, next: [ListNode] } }
//   }

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list.
// Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
// which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

const arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], next: list };
  }
  return list;
};

const testArr = [1, 2, 4];
const list = arrayToList(testArr);
console.log(list);

const listToArray = (list) => {
  const arr = [];
  for (let node = list; node !== null; node = node.next) {
    arr.push(node.value);
  }
  return arr;
};

const testList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};
const newArr = listToArray(testList);
// console.log(newArr);
