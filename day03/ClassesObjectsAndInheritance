let car = {
  make: "Toyota",
  model: "Campry",
  year: 2020,
  start: function() {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start())

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John");
// console.log(john);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function() {
  return `${this.type} makes a sound`;
}

Array.prototype.Alok = function() {
  return `Alok ka custom method on ${this}`;
}

let arr = [1, 2, 3, 4];
// console.log(arr.Alok());


class Vehicle {

  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Ferrari", "Campry");
console.log(myCar.start());
