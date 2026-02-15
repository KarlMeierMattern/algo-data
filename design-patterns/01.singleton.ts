// Singleton pattern
// Classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout the application, which makes Singletons great for managing global state in an application.
// In React, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons.
// Although their global state behavior might seem similar to that of a Singleton, these tools provide a read-only state rather than the mutable state of the Singleton.

let counter = 0;
let instance: Counter; // instance is a variable of type Counter

class Counter {
  constructor() {
    if (instance != null) {
      throw new Error("Instance already exists");
    }
    instance = this as Counter;
  }

  getInstance() {
    return instance;
  }

  getCount() {
    return counter;
  }

  increment() {
    counter++;
  }

  decrement() {
    counter--;
  }
}

const counter1 = Object.freeze(new Counter());
const counter2 = counter1.getInstance(); // same instance; don't use new Counter() again

console.log(counter1 === counter2);
console.log(`Count of counter1: ${counter1.getCount()}`);
counter1.increment();
console.log(`Count of counter1: ${counter1.getCount()}`);
counter1.decrement();
console.log(`Count of counter1: ${counter1.getCount()}`);
console.log(`Count of counter2: ${counter2.getCount()}`);
counter2.increment();
console.log(`Count of counter2: ${counter2.getCount()}`);
console.log(counter1.getInstance().getCount());
