// A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance.
// We can’t use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.

class Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Extend Dog interface with mixin methods
interface Dog {
  tail: () => void;
  woof: () => void;
  play: () => void;
  walk: () => void;
}

const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};

const dogFunctionality = {
  //   _proto_: animalFunctionality,
  tail: () => console.log("wagging tail"),
  woof: () => console.log("woof!"),
  play: () => console.log("playing"),
  walk() {
    super.walk();
  },
};

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);

const dog = new Dog("Jeff");
console.log(dog.name);
dog.woof();
dog.tail();
dog.play();
dog.walk();
