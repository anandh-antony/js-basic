const Programmer = require('./Programmer');

const anandh = new Programmer('Anandh', 'JavaScript');
// const antony = new Programmer('antony', 'Python');

console.log(anandh.language); // JavaScript
anandh.code(); // I'm coding in JavaScript

console.log(anandh.name); // Anandh
anandh.sayMyName(); // Hi, I am Anandh
