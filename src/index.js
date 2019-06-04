import test from "./test/index.js";
import emitter from "./eventEmitter/eventEmitter.js";

// console.log("this text is being output from src/index.js");
// console.log(test);

var name = "onClick";
var func = (name) => alert(name);

emitter.eventOn(name, func);
emitter.eventOn("raul", () => console.log("success"));
emitter.eventOn("tercero", func);
emitter.eventOn("raul", func);
console.log(emitter.eventList);

emitter.eventEmitt("whatever");
emitter.eventEmitt("raul", "whassup");
emitter.eventEmitt(name, "this is a message");

console.log(emitter.eventList);

emitter.eventOff("raul", func);

console.log(emitter.eventList);
