//An expression is any piece of code that produces a value
//a function call is an expression
/*
Expression:
  x>5 => true or false
  10+11=>21 value
  circleArea(5)=> expression funciton call
  reference value->n1

*/
function sayMyName() {
  console.log("Faith N");
}

let n1 = 23; // statement declare varauvke
console.log(n1); //23 n1=23 //
console.log(10 + 12); //10+12 // 22
console.log(n1 > 10); // n1>10 or true or false
console.log(sayMyName()); //funciton call=> undefined

//Arrow function
//Arrow function is a shorter syntax for writing functions in JavaScript. It is often used for anonymous functions or when you want to write a function in a more concise way.

const sayMyNameArrow = () => {
  console.log("Faith N");
};

