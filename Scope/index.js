// Ex: 1 - Global scope
const a = 10;
console.log(a);
// Ex: 2 - function scope
function exampleTwo() {
  const a = 10;
  console.log(a);
}
exampleTwo();

// Ex: 3 -
function exampleThree() {
  const a = 10;
}
exampleThree();
console.log(a);

// const a = 10;
function exampleFour() {
  const a = 20;
  console.log(a);
}
exampleFour();
console.log(a);

// const a = 10;
function exampleFive() {
  console.log(a);
}
exampleFive();

// const a = 10;
function exampleSix() {
  const b = 20;
  function inner() {
    const c = 30;
    console.log(a, b, c);
  }
  inner();
}
exampleSix();
