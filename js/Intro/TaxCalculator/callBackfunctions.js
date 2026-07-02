//callback function
//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// It allows you to control the flow of your code and handle asynchronous operations.
//it takes one or more parameters, which can be values or other functions.
// The callback function is then executed at a later time, usually after a specific event or condition is met.

//create a function that creates an alert for current time
//it should not take any parameters
//prints alert or console.log the current time stamp
//test the function by calling it

function showCurrentTime() {
  const currentTime = new Date();
  console.log(`Current time is: ${currentTime}`);
}

showCurrentTime();

//used the set interval with a named function

setInterval(showCurrentTime, 3000); // Call showCurrentTime every 3000 milliseconds (3 seconds)

//do the same with an anonymous function
// pass the function by refeernce statement

setInterval(function () {
  const currentTime = new Date();
  console.log(`Current time is: ${currentTime}`);
}, 3000);

//do the same with an arrow function

setInterval(() => {
  const currentTime = new Date();
  console.log(`Current time is: ${currentTime}`);
}, 3000);

//stop the interval
let intervalId = setInterval(() => {
  const currentTime = new Date();
  console.log(`Current time is: ${currentTime}`);
}, 3000);

clearInterval(intervalId); // Stop the interval after 10 seconds



//test the shape function with different shapes and parameters
shape(calculateCircleArea, "circle", 5);
shape(calculateRectangleArea, "rectangle", 4, 6);
shape(calculateTriangleArea, "triangle", 3, 8);
