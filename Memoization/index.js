function square(num) {
  return num * num;
}

function memoizedSquare() {
  let cache = {};
  return function optimizeSquare(num) {
    if (num in cache) {
      console.log('from cache');
      return cache[num];
    } else {
      console.log('computing Square');
      const result = square(num);
      cache[num] = result;
      return result;
    }
  };
}

const memoSquare = memoizedSquare();
console.log(memoSquare(2));
console.log(memoSquare(5));
console.log(memoSquare(5));

// Generic implementation

function memoize() {
  let cache = {};

  return function (...args) {
    const key = args.toString();
    if (key in cache) {
      console.log('from cache');
      return cache[key];
    } else {
      console.log('computing result');
      const result = callback(...args);
      cache[key] = result;
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 4));
console.log(memoizedAdd(2, 4));
