// when a function calls itself

// The recursion first goes deep (down) until it reaches 0, then works its way back up, multiplying as it goes.
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(3));
