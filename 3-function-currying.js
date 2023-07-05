//* Creating copies of a function, by presetting some args

//? Using bind--------------------------------------

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
let multiplyByThree = multiply.bind(this, 3, 5);
multiplyByThree(4); //! 4 ignored

//? Using closures-----------------------------------

let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let addTwo = add(2); //! setting x=2 and creating a copy
addTwo(4); //! y=4
