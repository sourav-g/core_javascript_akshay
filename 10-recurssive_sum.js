//?sum(1)(2)(3)(4)...()   => Ans : 10

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

//* let sum = (a)=>(b) => return b ? sum(a+b) : a;

console.log(sum(1)(2)(3)(4)(5)());

//let s1 = sum(1);
//let s2 = s1(2)
//let s3 = s2(3)
//....
