// The middleware pattern makes it easy for us to simplify many-to-many relationships between objects, by letting all communication flow through one central point.
// Think of it as a mediator where components interact with each other through a central point
// Think of air traffic controller and pilots. The pilots don't talk to each other directly, they all go through the air traffic controller.

// A good use case for the mediator pattern is a chatroom.
// The users within the chatroom won’t talk to each other directly. Instead, the chatroom serves as the mediator between the users.

class ChatRoom {
  public logMessage(user: User, message: string): void {
    const sender = user.getName();
    console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
  }
}

class User {
  private name: string;
  private chatroom: ChatRoom;

  constructor(name: string, chatroom: ChatRoom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  public getName(): string {
    return this.name;
  }

  public send(message: string): void {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
