// Object Methods

// Here are some of the most important methods for objects in JavaScript that are useful to remember.
// These methods are fundamental for manipulating objects in JavaScript and are commonly used in various programming tasks.

// 1. Object.keys(): Returns an array of a given object's own enumerable property names.
let obj = { a: 1, b: 2 };
let keys = Object.keys(obj); // keys is ['a', 'b']

// 2. Object.values(): Returns an array of a given object's own enumerable property values.
let values = Object.values(obj); // values is [1, 2]

// 3. Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let entries = Object.entries(obj); // entries is [['a', 1], ['b', 2]]

// 4. Object.assign(): Copies all enumerable own properties from one or more source objects to a target object.
let target = {};
Object.assign(target, obj); // target is now { a: 1, b: 2 }

// 5. Object.freeze(): Freezes an object, preventing new properties from being added to it and marking all existing properties as read-only.
Object.freeze(obj);
obj.a = 3; // This will not change obj.a

// 6. Object.seal(): Seals an object, preventing new properties from being added to it but allowing existing properties to be modified.
Object.seal(obj);
obj.a = 3; // This will change obj.a to 3

// 7. Object.create(): Creates a new object with the specified prototype object and properties.
let newObj = Object.create(obj); // newObj's prototype is obj

// 8. hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
let hasA = obj.hasOwnProperty("a"); // hasA is true

// 9. delete: Removes a property from an object.
delete obj.b; // obj is now { a: 1 }

// 10. JSON.stringify(): Converts a JavaScript object or value to a JSON string.
// JSON serialises the data. That means it is converted into a flat description.
// In JSON all property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.
let jsonString = JSON.stringify(obj); // jsonString is '{"a":1}'

// 11. JSON.parse(): Parses a JSON string, constructing the JavaScript value or object described by the string.
let parsedObj = JSON.parse(jsonString); // parsedObj is { a: 1 }

// 12. The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name.
let anObject = { left: 1, right: 2 };
console.log("right" in anObject); // → true

// 13. You can use three-dot notation (rest parameter) to “spread” out an object into a new object where it adds all properties from another object.
// If a property is added multiple times, the last value to be added wins.
let coordinates = { x: 10, y: 0 };
console.log({ ...coordinates, y: 5, z: 1 }); // → {x: 10, y: 5, z: 1}
