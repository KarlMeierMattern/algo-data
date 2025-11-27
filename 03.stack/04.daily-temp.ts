// https://neetcode.io/problems/daily-temperatures/question?list=neetcode150

// Daily Temperatures
// Medium

// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day.
// If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

// Example 1:
// Input: temperatures = [34,32,30,36,35,40,28]
// Output: [1,4,1,2,1,0,0]

// Example 2:
// Input: temperatures = [22,21,20]
// Output: [0,0,0]

// Constraints:
// 1 <= temperatures.length <= 1000.
// 1 <= temperatures[i] <= 100

const dailyTemp = (temps: number[]): number[] => {
  const result = Array(temps.length).fill(0);
  const stack: number[] = []; // store indices

  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const prev = stack.pop()!;
      result[prev] = i - prev;
    }
    stack.push(i);
  }

  return result;
};

console.log(dailyTemp([34, 32, 30, 36, 35, 40, 28]));
