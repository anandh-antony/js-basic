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

function Programmer(name, language) {
  Person.call(this, name);
  this.language = language;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
  console.log(`I'm coding in ${this.language}`);
};

module.exports = Programmer;
