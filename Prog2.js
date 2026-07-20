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

