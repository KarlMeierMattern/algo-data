// Write a recursive function to sum the digits of a number.

// sumDigits(1234) // 10 (1+2+3+4)

const sumDigits = (num: number): number => {
  if (num === 0) return 0;

  return (num % 10) + sumDigits(Math.floor(num / 10));
};

console.log(sumDigits(1234));
