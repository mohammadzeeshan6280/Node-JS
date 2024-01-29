// Event Module
// Node.js has a built-in module, called "Events"
// Where you can create-, fire-, and listen for- your own events.

// Example 1- Registering for the event to be fired only one time using once.

// Example 2- Create an event emitter instance and register a couple of callbacks

// Example 3- Registering for the event with callback parameters

// const event = require("events")
// const EventEmitter = new event.EventEmitter(); 

/*
const EventEmitter = require("events")
const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log("My Name is MOHAMMAD ZEESHAN")
});

event.on('sayMyName', () => {
    console.log("My Name is ZEESHAN")
});

event.on('sayMyName', () => {
    console.log("My Name is ANSARI")
});

event.emit('sayMyName');

*/

const EventEmitter = require("events")
const event = new EventEmitter();

event.on("checkPage", (sc, msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit('checkPage', 200, "ok");
