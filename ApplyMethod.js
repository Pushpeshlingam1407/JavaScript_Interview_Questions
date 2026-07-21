//TODO: Demonstrate the use of the apply() method to invoke a function with a specified `this` context and pass arguments as an array.

const person = {
  id: 1,
  name: "pushpesh",
  age: 22,
  showDetails: function (...rest) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`${rest}`);
  },
};

const student = {
  id: 2,
  name: "Jon Snow",
  age: 25,
};

person.showDetails.apply(student); //* Calls the showDetails method on the person object with the student object as the context
person.showDetails.apply(person); //* Calls the showDetails method on the person object with the person object as the context
person.showDetails.apply(student, ["Marthahalli", "KA"]); //* Calls the showDetails method on the person object with the student object as the context and passes the arguments as an array
person.showDetails.apply(person, ["Bangalore", "KA"]); //* Calls the showDetails method on the person object with the person object as the context and passes the arguments as an array
