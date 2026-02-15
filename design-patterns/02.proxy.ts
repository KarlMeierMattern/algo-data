// Proxy pattern
// With a Proxy object, we get more control over the interactions with certain objects.
// A proxy object can determine the behavior whenever we’re interacting with the object, for example when we’re getting a value, or setting a value.
// Instead of interacting with the target object directly, we’ll interact with the Proxy object.
// Proxies are a powerful way to add control over the behavior of an object.
// A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// The second argument of Proxy is the handler object that defines specific behaviors.
// The get() method is called when we try to access a property on the proxy object.
// The set() method is called when we try to set a property on the proxy object.
const personProxy = new Proxy(person, {
  get: (obj: typeof person, prop: keyof typeof person) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (
    obj: typeof person,
    prop: keyof typeof person,
    value: number | string,
  ): boolean => {
    if (prop === "age" && typeof value !== "number") {
      throw new Error("Age must be a number");
    }
    if (prop === "name" && typeof value !== "string") {
      throw new Error("Name must be a string");
    }
    if (prop === "city" && typeof value !== "string") {
      throw new Error("City must be a string");
    }
    console.log(`Setting ${prop} to ${value}`);
    obj[prop] = value as never;
    return true;
  },
});
personProxy.name;
personProxy.name = "Jane Doe";
personProxy.name;
personProxy.age = 31;
personProxy.age;
