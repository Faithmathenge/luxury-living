//a recursive function is a function that calls itself
//since this creates an endless loop, you need to find a way to terminate.
//that is using a return statement. and if conditions

/*
function salaryGrossPromptProcess() {
  let gross = prompt("Enter your gross salary:");
  if (isNaN(gross) === false) {
    console.log(`you entered ${gross} exiting`);
    return gross;
  }
  alert(
    `Invalid gross salary entered . Please enter a valid number for gross salary. Try again`,
  );

  salaryGrossPromptProcess();
}

salaryGrossPromptProcess();
*/

// remove the alert
//intial promppt should be enter your gross salary
//any prompt after that should be "Invalid gross salary entered. Please enter a valid number for gross salary. Try again"

function salaryGrossPromptProcess(message = "Enter your gross salary:") {
  let gross = prompt(message);

  if (!isNaN(gross)) {
    console.log(`You entered ${gross} exiting`);
    return gross;
  }

  return salaryGrossPromptProcess(
    "Invalid gross salary entered. Please enter a valid number for gross salary. Try again:",
  );
}

salaryGrossPromptProcess();

/*
create a function to calculate the factorial of a number
the function takes a parameter
@param1 which is a number and returns the factorial of that number
check the number entered is greater than 1
use a recursive function
*/

function factorial(num) {
  if (num <= 1) {
    return "Please enter a valid number greater than 1.";
  }
  if (num === 2) {
    return 2;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));
