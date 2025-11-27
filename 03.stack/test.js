test("basic example", () => {
  expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
});

test("single fleet", () => {
  expect(carFleet(10, [6, 4, 2], [3, 2, 1])).toBe(1);
});

test("no cars", () => {
  expect(carFleet(10, [], [])).toBe(0);
});
