// With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable.
// Whenever an event occurs, the observable notifies all its observers.
// Also known as pub/sub pattern

class Observable {
  public observers: Function[]; // an array of observers that will get notified whenever a specific event occurs

  constructor() {
    this.observers = [];
  }

  subscribe(func: Function) {
    this.observers.push(func);
  }

  unsubscribe(func: Function) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: string) {
    this.observers.forEach((observer) => observer(data));
  }
}

const observable = new Observable();

// observer
const logger = (data: string) => {
  console.log(`${new Date().toLocaleDateString()} [Logger]: ${data}`);
};

// observer
const toastify = (data: string) => {
  console.log(`${new Date().toLocaleDateString()} [Toastify]: ${data}`);
};

// subscribe observers to the observable
observable.subscribe(logger);
observable.subscribe(toastify);

// whenever this event occurs the observable should notify all its observers (logger and toastify)
const handleClick = () => {
  observable.notify("Button clicked!");
};

// whenever this event occurs the observable should notify all its observers (logger and toastify)
const handleToggle = () => {
  observable.notify("Toggle toggled!");
};

// simulate an events
handleClick();
handleToggle();
