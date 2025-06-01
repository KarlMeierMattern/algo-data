// https://neetcode.io/problems/evaluate-reverse-polish-notation?list=blind75

// Evaluate Reverse Polish Notation
// Medium

// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
// Return the integer that represents the evaluation of the expression.
// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

// Example 1:
// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5

// Constraints:
// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].

const reversePolishNotation = (tokens) => {
  // initialise a stack
  // operators are +, -, *, /
  // if the token is a number, push it to the stack
  // if the token is an operator, pop the last two numbers from the stack, perform the operation, and push the result back to the stack
  // return the last element of the stack

  const stack = [];

  for (const num of tokens) {
    if (num === "+") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num1 + num2);
    } else if (num === "-") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num2 - num1);
    } else if (num === "*") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num1 * num2);
    } else if (num === "/") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num2 / num1);
    } else {
      stack.push(Number(num));
    }
  }
  return stack.pop();
};

const tokens = ["1", "2", "+", "3", "*", "4", "-"];
console.log(reversePolishNotation(tokens));
