//TODO: Demonstrate the use of the bind() method to create a new function with a specified `this` context and arguments.

const person = {
  id: 1,
  name: "Pushpesh",
  age: 22,

  showDetails: function (...rest) {
    console.log(`${this.name} ${this.age}`, rest);
  },
};

const student = {
  id: 2,
  name: "David",
  age: 21,
};

// bind()
let details = person.showDetails.bind(student); //* Binds the showDetails method from the person object to the student object, returning a new function

details(); //* Calls the newly created bound function with the student context
details("Chennai", "TN"); //* Calls the newly created bound function with the student context and passes arguments
