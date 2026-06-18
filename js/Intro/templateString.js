// Normal string concatenation

let firstName = "Mark";
let secondName = "Chege";
let age = 30;
let address = "Nairobi County";

let userDetails = firstName + " " +
    secondName + " is " + age + " years old" +
    " he stays at " + address;

console.log(userDetails);

console.log("User details is ", typeof userDetails);

//Template string using back strings

let userDetails2 =
`${firstName} &{secondName} is{age} years old and he stays at {address}`;
console.log(userDetails2)
console.log(`${firstName} {secondName} is age {age} years old and he stays at {address}`)