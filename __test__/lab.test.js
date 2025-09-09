const {
  reverseArray,
  removeDuplicates,
  sortArray,
  asyncGreet,
} = require("../src/lab");

describe("Array Problems", () => {
  test("reverseArray should reverse the array", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test("removeDuplicates should return unique elements", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sortArray should sort numbers in ascending order", () => {
    expect(sortArray([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    expect(sortArray([])).toEqual([]);
  });
});

describe("Async Greeting Function", () => {
  test("asyncGreet should return a promise", () => {
    const result = asyncGreet("Bob");
    expect(result instanceof Promise).toBe(true);
  });

  test("asyncGreet should resolve with correct greeting", async () => {
    const result = await asyncGreet("Alice");
    expect(result).toBe("Hello, Alice!");
  });
});
