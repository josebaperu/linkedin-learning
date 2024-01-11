import { EventEmitter } from "events";

let emitter = new EventEmitter();

emitter.on("myEvent", message => {
    console.log(`Message is ${message}`);
})
emitter.emit("myEvent", "random text");