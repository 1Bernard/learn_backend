const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello';
  }

  greet(name) {
    this.emit('greeting', `${this.greeting} ${name}`);
  }
}

const MyCustomEmitter = new MyCustomEmitter();

MyCustomEmitter.on('greeting', (input) => console.log('Greeting event', input));

MyCustomEmitter.greet('John');