function loop(val, test, update, output) {
  if (!test(val)) {
    return;
  }

  output(val);
  loop(update(val), test, update, output);
}

loop(
  3,
  (n) => n > 0, // Condition: Run while n > 0
  (n) => n - 1, // Update: Decrement n by 1
  console.log // Output: Print n
);
