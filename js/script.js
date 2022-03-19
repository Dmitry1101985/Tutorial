"use strict";
let someText = 'Hello to me!';
const SOME_ANOTHER_TEXT = 'Hello to all Ukrainian people!';
let something = null;
let isItWorks = true;
console.log(someText.length);
console.log(someText);
console.log(SOME_ANOTHER_TEXT.length);
console.log(SOME_ANOTHER_TEXT);
console.log(someText.length, " type is: ", typeof someText.length);
console.log(typeof SOME_ANOTHER_TEXT);
console.log(typeof something);
console.log(typeof isItWorks);
alert(SOME_ANOTHER_TEXT);

const isHuman = confirm("Are you think puilo is crazy?");
alert(isHuman);

const whoIsPutin = prompt("Tell me who is Putin?");
alert("Putin - " + whoIsPutin);