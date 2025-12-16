function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Ferrari", "Campry");
let  myNewCar = new Car("Range Rover", "Suv");
// console.log(myCar);
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function() {
    return `this is a cup of ${this.type}`;
  }
}

let lemonTea = new Tea("Lemon Tea");
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function() {
  return `${this.species} make a sound`;
}

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

function Drink(name) {
  if(!new.target) {
    throw new Error("Must called with new");
  }
  this.name = name;

}

let tea = new Drink("tea");
let coffee = new Drink("coffee");
