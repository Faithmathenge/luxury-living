//our own call back function
//doing shape stuff
//circle
//rectangle
//triangle

/*
for eachshape create an arrow  function to calcuate area
ensure the function takes the required parameters for each shape
test the function
*/

// area of a circle
function calculateCircleArea(radius) {
  return 3.142 * radius * radius;
}

console.log(`Area of circle with radius 12: ${calculateCircleArea(12)}`);

// area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

console.log(
  `Area of rectangle with length 10 and width 8: ${calculateRectangleArea(10, 8)}`,
);

// area of a triangle
const calculateTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

console.log(
  `Area of triangle with base 10 and height 6: ${calculateTriangleArea(10, 6)}`,
);

/*
create a super function called shape
1st paramenter =>function correct shape required
2nd parameter =>shape name string
3rd parameter => s1 required
4th parameter => s2 optional
5th parameter => s3 optional
inside your function shape. console each of the parameters and their type
for each of the function ie circle, rectangle and triangle, call the shape function and pass the required parameters
inside your shape function. create a result variable and equate it to the function call 1st parameter, 2nd parameter, 3rd parameter, 4th parameter and 5th parameter
 console log the shape name and the result

*/

function shape(shapeFunction, shapeName, s1, s2, s3) {
  console.log(`Shape Name: ${shapeName}, Type: ${typeof shapeName}`);
  console.log(`Parameter 1: ${s1}, Type: ${typeof s1}`);
  console.log(`Parameter 2: ${s2}, Type: ${typeof s2}`);
  console.log(`Parameter 3: ${s3}, Type: ${typeof s3}`);

  const result = shapeFunction(s1, s2, s3);
  console.log(`The area of the ${shapeName} is: ${result}`);
}

// Call the shape function with the appropriate parameters
shape(calculateCircleArea, "circle", 10);
shape(calculateRectangleArea, "rectangle", 10, 8);
shape(calculateTriangleArea, "triangle", 10, 6);
