//? .call,.apply,.bind are functions available
//? on Function.prototype

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

let name = {
  firstName: "Sourav",
  lastName: "Ghosh",
};

printFullName.call(name, "Siliguri", "West Bengal");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

//* Function borrowing

//!call -> call the function, by setting this and other params ( comma separated)
printFullName.call(name2, "Mumbai", "Maharashtra");

//!apply -> call the function, by setting this and other params ( as array)
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//!bind -> used to bind 'this' and keep a copy of the new method, to invoke later
let bindedFunc = printFullName.bind(name2, "Mumbai", "Maharashtra");
bindedFunc();
