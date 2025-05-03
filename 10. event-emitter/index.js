const EventEmitter = require('events');

const myFisrtEmitter = new EventEmitter();

//register a listener
myFisrtEmitter.on('greet', (name) => console.log(`Hello ${name}`));

myFisrtEmitter.emit('greet', 'John');