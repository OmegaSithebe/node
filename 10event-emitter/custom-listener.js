const EventEmitter = require('events');

class myCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello'
    }

    greet(name){
        this.emit('greeting', `${this.greeting}, ${name}`)
    }
}

const MyCustomEmitter = new myCustomEmitter();

MyCustomEmitter.on('greeting', (input)=> {
    console.log(`Greeting event`, input)
});

MyCustomEmitter.greet('Omega Sithebe');