//TODO:

const person = {
  id: 1,
  name: "Pushpesh",
  age: 22,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet()
