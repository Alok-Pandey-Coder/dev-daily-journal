let person = {
  name: "Alok",
  greet() {
    return `hi, I am ${this.name}`;
  }

}

let greetFn = person.greet //context is lost during reference transfer;
let boundfn = person.greet.bind(person);
console.log(boundfn());

// bind, call, apply
