//TODO: Implement the callMethod function that takes an object and a method name as arguments, and calls the specified method on the object if it exists. If the method does not exist, it should return a message indicating that the method is not found.
const person = {
  id: 1,
  name: "Pushpesh",
  age: 22,
  showDetails: function (...rest) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};

const student = {
  id: 2,
  name: "Jon Snow",
  age: 20,
};

//Call()
person.showDetails.call(student); //* Calls the showDetails method on the person object with the student object as the context
person.showDetails.call(person); //* Calls the showDetails method on the person object with the person object as the context
person.showDetails.call(student, "Marthahalli", "KA"); //* Calls the showDetails method on the person object with a new object as the context
person.showDetails.call(person, "Banglore", "KA"); //* Calls the showDetails method on the person object with a new object as the context
