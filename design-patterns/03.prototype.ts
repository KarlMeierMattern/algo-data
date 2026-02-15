// The prototype pattern is very powerful when working with objects that should have access to the same properties.
// Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.
// Since all instances have access to the prototype, it’s easy to add properties to the prototype even after creating the instances.
// The prototype pattern allows us to easily let objects access and inherit properties from other objects.
// Since the prototype chain allows us to access properties that aren’t directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.

class Hound {
  public name: string;
  public message: string;

  constructor(name: string, message: string) {
    this.name = name;
    this.message = message;
  }

  public getName() {
    return this.name;
  }

  public bark() {
    console.log(`${this.name} says ${this.message}`);
  }
}

class SuperDog extends Hound {
  constructor(name: string, message: string) {
    super(name, message);
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

const puppy1 = new Hound("Joe", "Woof");
const puppy2 = new Hound("Sam", "Bark");

// Whenever we try to access a property on an object that doesn’t exist on the object directly, JavaScript will go down the prototype chain to see if the property is available within the prototype chain.
// The play() method doesn't exist on the instance itself so JS goes down the prototype chain and finds that it exists on the class
Hound.prototype.play = () => console.log("Playing");
puppy1.play();
puppy2.play();

// The value of __proto__ on the prototype of SuperDog points to the Dog.prototype object which is why we have access to bark()
const puppy3 = new SuperDog("Jack", "Woof");
puppy3.fly();
puppy3.bark();

// This is what is happening under the hood
// Think of this object as a class which is all that a class is really
const doggy = {
  bark() {
    console.log(`Woof!`);
  },
};

const puppy4 = Object.create(doggy);

puppy4.bark(); // Woof!
console.log("Direct properties on puppy4: ", Object.keys(puppy4));
console.log(
  "Properties on puppy4's prototype: ",
  Object.keys(puppy4.__proto__)
);
