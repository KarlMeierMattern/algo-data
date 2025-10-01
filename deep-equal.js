// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
// where the values of the properties are equal when compared with a recursive call to deepEqual.

const deepEqual = (a, b) => {
  // If a and b are strictly equal, return true
  if (a === b) {
    return true;
  }

  // If either a or b is not an object (or is null), return false
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // Get the keys of both objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If the number of properties is different, they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare each property in the objects
  for (let key of keysA) {
    // If key doesn't exist in b or values for the key are not equal, return false
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // If all checks pass, return true
  return true;
};
