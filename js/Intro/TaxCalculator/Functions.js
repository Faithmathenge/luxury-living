/*
  Function allow you to write reusable bits of code.
  To use Dry(Do not repeat your self) by using code block

  //Rules
    a function executes only when called.
    calling a function is telling the function to do its work.
*/


function timeAlert() {
  const date = new Date();
  alert(`time stamp: ${date.toISOString()}`);
}

timeAlert(); //calling a function

function timeAlert() {
  const date = new Date();
  alert(
    `time stamp: ${date.toLocaleString("en-KE", {
      timeZone: "Africa/Nairobi",
    })}`,
  );
}

timeAlert(); //calling a function


//Area of a triangle
 0.5*l*w
 
//base=undefined , height=undefined
function areaOfTriangle(base, height) {
  console.log(`base, height is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `For triangle with base ${base} and height ${height} area is ${area}`,
  );
}

//scenario 1

areaOfTriangle();

//scenario 2

areaOfTriangle(20);

//scenario 3
areaOfTriangle(20, 30);

//scenario 4
let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1);

//scenario 5

const base2 = "hello";
const height2 = true;
areaOfTriangle(base2, height2);

areaOfTriangle();
areaOfTriangle(20);
areaOfTriangle(20, 30);

let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1);

let base2 = "hello";
let height2 = true;
areaOfTriangle(base2, height2);
