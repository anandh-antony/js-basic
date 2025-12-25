const Person = require('./prototype');

const anandh = new Person('Anandh');
const antony = new Person('antony');

console.log(Object.getPrototypeOf(anandh));
console.log(Person.prototype);
// {sayMyName: ƒ, eat: ƒ, sleep: ƒ, constructor: ƒ}

console.log(Object.getPrototypeOf(anandh).constructor);
// ƒ Person(name) {
//   this.name = name
// }

console.log(anandh instanceof Person);
//true
// => Object.getPrototypeOf(anandh) === Person.prototype
