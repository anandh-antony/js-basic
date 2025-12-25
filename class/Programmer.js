function Person(name) {
  this.name = name;
}
Person.prototype.sayMyName = function () {
  console.log(`Hi, I am ${this.name}`);
};
Person.prototype.eat = function (food) {
  console.log(`i'm eating ${food}`);
};
Person.prototype.sleep = function () {
  console.log('Sleeping');
};

class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }

  code() {
    console.log(`I'm coding in ${this.language}`);
  }
}

module.exports = Programmer;
