const string = "cat";

const testIndex = (string) => {
  if (string.includes("a")) {
    return true;
  }
  return false;
};

console.log(testIndex(string));
