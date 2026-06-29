//return statements enables you to exit a function and return something

function sayMyName() {
  let first_name = "Faith";
  console.log(`First Name ${first_name}`);
  let second_name = "Mathenge";
  console.log(`second Name  ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let sayMyNameValue = sayMyName();
console.log(`Function returned ${sayMyNameValue}`);

// scenario two
function sayMyName() {
  let first_name = "Faith";
  console.log(`First Name ${first_name}`);
  return;
  let second_name = "Mathenge";
  console.log(`second Name  ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

//scenario 3
function sayMyName() {
  let first_name = "Faith";
  console.log(`First Name ${first_name}`);
  let second_name = "Mathenge";
  console.log(`second Name  ${second_name}`);
  return;
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

//scenario 4
//scenario 4
function sayMyName() {
  let first_name = "Faith";
  console.log(`First Name ${first_name}`);
  let second_name = "Mathenge";
  console.log(`second Name  ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
  return "I am not okay";
}

//scenario 5
function sayMyName() {
  let first_name = "Faith";
  console.log(`First Name ${first_name}`);
  let second_name = "Mathenge";
  console.log(`second Name  ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
  return 23;
}

//scenario 6
function sayMyName() {
  let first_name = "Faith";
  console.log(`First Name ${first_name}`);
  let second_name = "Mathenge";
  console.log(`second Name  ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
  return true;
}
