//Encapsulation:- to restrict the direct access to object's data:
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return `Balance updated to ${this.#balance}`;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.deposit(3000));
// console.log(account.deposit(5000));

// Abstraction: hiding the complex information, hame to bas apne kaam se matlab hai;

class CoffeMachine {
  
  start() {
    return `Starting the machine...`;
  }

  brewCoffe() {
    return `Brewing the Coffee`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffe();
    return `${msg1} + ${msg2}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
// console.log(myMachine.pressStartButton());

// PolyMorphism:- thing can take more than one form

class Bird {

  fly() {
    return `I am Flying....`;
  }
}

class Penguin extends Bird {

  fly() {
    return `cannot fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// Static Method

class Calculator {

  static add(a, b) {
    return a + b;
  }
}

let minCalc = new Calculator();
// console.log(Calculator.add(9, 6));

// Getters and Setters

class Employee {
  #salary;

  constructor(name, salary) {
    if(salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `Not Allowed`
  }

  set salary(value) {
    if(value < 0) {
      console.error("Invalid Salary"); 
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Alice", -50000);
console.log(emp.salary);
