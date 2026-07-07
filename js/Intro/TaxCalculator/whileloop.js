/*
loops enable you to run a block of code over and over again
you should not loop too many times or you will crash your browser
you should have an exit condition
syntax:
while(condition){
  //code to run if condition is true
  //exit if condition is false
}
*/

let n = 0;
let condition = true;

while (condition) {
  console.log("n is", n);
  n = n + 1;
  if (n > 100) {
    condition = false;
  }
}

/*
create a function
the function should take a parameter
@param is number greater than 0
have a loop that counts down from this number
use while loop. it should print n
*/

function countdown(n) {
  while (n > 0) {
    console.log(n);
    n = n - 1;
  }
}
countdown(7);

/*
Create a function @function1 (give it any name).

It does not take any parameters.

This function:

1. Prompts a user for the first number.
   Check if the number is a valid number greater than 1.

2. Prompts a user for the second number.
   Check if the number is a valid number greater than 1.

Use recursion or a while loop to ensure the user enters a correct number for number1 and number2.

After the numbers are entered, call @function2, which takes the numbers as parameters.

Example:
@function2(number1, number2)
*/

function getNumbers() {
  let number1;
  let number2;

  while (true) {
    number1 = Number(prompt("Enter the first number:"));
    if (!isNaN(number1) && number1 > 1) {
      break;
    }
    alert("Please enter a valid number greater than 1.");
  }

  while (true) {
    number2 = Number(prompt("Enter the second number:"));
    if (!isNaN(number2) && number2 > 1) {
      break;
    }
    alert("Please enter a valid number greater than 1.");
  }

  multiplicationTable(number1, number2);
}

function multiplicationTable(number1, number2) {}

getNumbers();

/*
Create a function @function2 (give it any name).

This function takes the following parameters:

@param1 number greater than 1.
@param2 number greater than 1.

Check if @param1 is a number greater than 1.
Check if @param2 is a number greater than 1.

Example:
@function2(3,5)

Create a maths table for it up to 1, i.e. console logs.

------
3*5=
3*4=
3*3=
3*2=
3*1=

------


*/

function multiplicationTable(number1, number2) {
  if (isNaN(number1) || number1 <= 1) {
    console.error("The first number must be greater than 1.");
    return;
  }

  let outerloop = number1;

  while (outerloop > 0) {
    let innerloop = number2;
    while (innerloop > 0) {
      console.log(`${outerloop} * ${innerloop} = ${outerloop * innerloop}`);
      innerloop = innerloop - 1;
    }
    outerloop = outerloop - 1;
  }
}

//individual //test separate
function doInnerLoop(outerloop, number2) {
  let innerloop = number2;
  while (innerloop > 0) {
    console.log(`outerloop: ${outerloop}, innerloop: ${innerloop}`);
    console.log(`${outerloop} * ${innerloop} = ${outerloop * innerloop}`);
    innerloop = innerloop - 1;
  }
}
