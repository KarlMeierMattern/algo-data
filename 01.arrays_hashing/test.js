const arr = [1, 2, 3, 4, 5];

const map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], i);
}

console.log(map.get(4));
