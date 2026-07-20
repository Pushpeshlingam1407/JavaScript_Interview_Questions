//TODO:

const person = {
  id: 1,
  name: "Pushpesh",
  age: 22,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet();

console.log(Object.keys(person)); //* Returns an array of the object's keys
console.log(Object.values(person)); //* Returns an array of the object's values
console.log(Object.entries(person)); //* Returns an array of the object's key-value pairs

const student = Object.create(person); //* Creates a new object with the specified prototype object and properties
student.name = "Jon Snow";
student.greet(); //* Inherited method from person object
console.log(student); //* Logs the student object with its own properties and inherited properties from person object
