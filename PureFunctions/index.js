function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// Impure Functions – with different result
function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

// Impure Functions – with side effect
let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 5));
