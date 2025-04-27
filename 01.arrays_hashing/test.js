function simpleHash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = hash + 1;
  }
  return hash;
}

// Using the hash function in a hash map
const hashMap = {};
const key = "apple";
const value = "fruit";

hashMap[simpleHash(key)] = value; // Storing using hash of the key

console.log(hashMap); // Access using hash
