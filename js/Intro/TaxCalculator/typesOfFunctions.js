// Named function
function areaCircle() {}

//Anonymous function
// a function can be assigned  to a varriable
// a variable can referance a function

function areaCircle(r) {
  return 3.142 * r * r; // area of a function//
} //named  function

//
let age = 23;

let faithsAge = age;

let ac = areaCircle;
let k = areaCircle; //NaN expressin evaluated to yield
console.log(ac); // reference to the area of a cicle
console.log(typeof ac); //function

ac(10); //function

//to create an anonymous function
//create a function of your choice
//assign that function a variable
//directly create equate tour variable to the function
//remove the original function
//try calling the variable and try calling the original function
//name of the function is useless
//you are left with an anonymous function eg rA

function rectangleArea(l, w) {
  return l * w;
}
let rA = rectangleArea;
