// https://neetcode.io/problems/string-encode-and-decode

// Encode and Decode Strings
// Medium
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:
// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

// Example 2:
// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]

// Constraints:
// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

const encodeString = (stringList, encodeChar) => {
  return stringList.map((str) => str.length + "#" + str).join("");
};

const decodeString = (encodedString) => {
  let result = [];
  let i = 0;

  while (i < encodedString.length) {
    let j = encodedString.indexOf("#", i); // i represents the starting index to search for the first occurrence of # and returns its index
    let length = parseInt(encodedString.substring(i, j)); // the second argument j is exclusive -> retrieves the number we encoded which represents the length of each string in the original list
    i = j + 1 + length;
    result.push(encodedString.substring(j + 1, i));
  }

  return result;
};

// Test
const testString = ["neet", "code", "love", "you"];
const encoded = encodeString(testString);
const decoded = decodeString(encoded);

console.log("Encoded:", encoded);
console.log("Decoded:", decoded);
