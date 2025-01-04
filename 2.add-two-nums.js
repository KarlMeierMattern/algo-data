// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// MY NOTES
// Each ListNode is an individual node.
// The linked list is formed by connecting these ListNode instances together through their next properties.
// The entire structure of nodes connected via next properties constitutes the linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0); // Dummy node to simplify the logic
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val); // Create a new node with the value
    current = current.next; // Move current to the new node
  }

  return dummy.next; // Return the actual linked list (skip dummy node)
}

// Input arrays
const l1 = [2, 4, 3, 1];
const l2 = [5, 6, 4];

// Convert arrays to linked lists
const l1ListNode = arrayToLinkedList(l1);
const l2ListNode = arrayToLinkedList(l2);
// console.log(l1ListNode);

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1ListNode, l2ListNode) {
  let dummy = new ListNode(0); // The dummy node is a temporary placeholder that helps you build the linked list without special cases for the first node.
  let current = dummy;
  let carry = 0;

  // The ListNode objects are checked for their existence (truthiness). When you reach the end of the linked list, the next property of the last ListNode will be null, indicating that there are no more nodes.
  // The carry variable determines whether the loop continues or not, eventually leading to it being 0 when there are no more digits or carry to process.
  while (l1ListNode || l2ListNode || carry > 0) {
    const val1 = l1ListNode ? l1ListNode.val : 0; // the val property holds the actual value of the node.
    const val2 = l2ListNode ? l2ListNode.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10); // add new node
    current = current.next; // move current to new node
    if (l1ListNode) l1ListNode = l1ListNode.next; // checks if ListNode is truthy (i.e., it points to a valid node). If it does, it updates ListNode to point to the next node in the linked list.
    if (l2ListNode) l2ListNode = l2ListNode.next;
  }

  return dummy.next; // dummy.next points to the head of the linked list because it is the first actual node you added after the dummy node.
}

// Function to convert linked list to array for easy printing
function listToArray(node) {
  let result = [];
  while (node) {
    // When the end of the linked list is reached, node will be null, which will cause the loop to terminate.
    result.push(node.val);
    node = node.next;
  }
  return result;
}

// Add the two numbers and convert the result to an array
const result = addTwoNumbers(l1ListNode, l2ListNode);

// Print as linked list of individual ListNodes
// console.log(result);

// Print the result as an array for easier visualization
console.log(listToArray(result)); // Output should be [7, 0, 8, 1]
