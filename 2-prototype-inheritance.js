//? Prototypical inheritance vs Classical inheritance
//? __proto__ vs prototype

let arr = ["Sourav", "Soumita"];

console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__ === Object.prototype); //true
console.log(arr.__proto__.__proto__.__proto__ === null); //true

console.log(arr.prototype);
//!undefined
//!.prototype is a static method ?
//! Never put anything in __proto__
