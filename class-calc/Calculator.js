class Calculator {
  constructor() {
    this.value = 0;
  }
  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  print() {
    console.log(this.value);
  }
}

class ScientificCalculator extends Calculator {
  square() {
    this.value = this.value * this.value;
    return this;
  }
}

module.exports = ScientificCalculator;
