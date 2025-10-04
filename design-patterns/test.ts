class Chatroom {
  public logmessage(user: User, message: string) {
    const sender = user.getUser();
    console.log(`${new Date().toLocaleString()} [${sender}] ${message}`);
  }
}

class User {
  private name: string;
  private chatroom: Chatroom;

  constructor(name: string, chatroom: Chatroon) {
    this.name = name;
    this.chatroom = chatroom;
  }

  public getUser() {
    return this.name;
  }

  public sendMessage(message: string): void {
    this.chatroom.logmessage(this, message);
  }
}

const chatroom = new Chatroom();
const user1 = new User("Charlie", chatroom);

user1.sendMessage("Hi this is Charlie!");
