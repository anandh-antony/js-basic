function Person(name) {
  this.name = name;
  // this.greet = function () {
  //   console.log(`Hi, I am ${this.name}`)
  // }
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

module.exports = Person;
