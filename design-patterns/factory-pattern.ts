// Factory Pattern
// Used to create new objects.
// Returns a new object without the use of the new keyword
const newUserFactory = (
  firstName: string,
  lastName: string,
  email: string
) => ({
  firstName,
  lastName,
  email,
  getDetails: () => `${firstName} ${lastName} ${email}`,
});

const newUser2 = newUserFactory("Jane", "Smith", "jane.smith@example.com");

console.log(newUser2.getDetails());

// Using a class
// In many cases it may be more memory efficient to create new instances instead of new objects each time.
class NewUser {
  private firstName: string;
  private lastName: string;
  private email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getDetails() {
    return `${this.firstName} ${this.lastName} ${this.email}`;
  }
}

const newUser = new NewUser("John", "Doe", "john.doe@example.com");

console.log(newUser.getDetails());
