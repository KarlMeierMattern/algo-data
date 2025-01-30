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
let jsonString = JSON.stringify(obj); // jsonString is '{"a":1}'

// 11. JSON.parse(): Parses a JSON string, constructing the JavaScript value or object described by the string.
let parsedObj = JSON.parse(jsonString); // parsedObj is { a: 1 }
