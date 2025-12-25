// Normal function
// function normalFunction() {
//   console.log('Hello')
//   console.log('World')
// }

// Generator function

function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

const generatorObject = generatorFunction();

// logs Hello World
for (const word of generatorObject) {
  console.log(word);
}

// logs ['Hello', 'World']
console.log([...generatorObject]);

generatorObject.next(); //Returns { value: 'Hello', done: false }
generatorObject.next(); //Returns { value: 'World', done: false }
generatorObject.next(); //Returns { value: undefined, done: true }
