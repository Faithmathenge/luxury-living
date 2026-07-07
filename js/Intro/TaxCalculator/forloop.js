//mostly ment for numbers
//loops have a starting point, a condition, offer each other itteration

function getNumbers() {
  let number1 = Number(prompt("Enter the first number:"));
  let number2 = Number(prompt("Enter the second number:"));

  if (number1 > 1 && number2 > 1) {
    multiplicationTable(number1, number2);
  } else {
    alert("Both numbers must be greater than 1.");
  }
}

function multiplicationTable(number1, number2) {
  for (let i = number1; i >= 1; i--) {
    for (let j = number2; j >= 1; j--) {
      console.log(i + " * " + j + " = " + i * j);
    }

    console.log("----------------");
  }
}

getNumbers();

//use this while loop to make a for loop
let k = 0;
while (k < 5) {
  console.log("k", k);
  k = k + 1;
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k", k);
}
