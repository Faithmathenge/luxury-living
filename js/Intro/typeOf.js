/*
the typeof is just to tell you the variable type.

-> number
-> string
-> boolean
-> null
-> undefined
*/

let numb1 = 444;
console.log("numb1 ", numb1, " Its type is ", typeof numb1);

let strNumb = "222";
console.log("strNumb ", strNumb, " Its type is ", typeof strNumb);

let myName = "Faith";
console.log("My name is ", myName, " Its type is ", typeof myName);

let isMarried = true;
console.log("isMarried ", isMarried, " Its type is ", typeof isMarried);

let nullVal = null; // type of null object :(
console.log("nullVal ", nullVal, " Its type is ", typeof nullVal);

let unValue;
console.log("unValue ", unValue, " Its type is ", typeof unValue);


const bonus ="5000"
const sallary =50000

const sallaryGross =bonus + sallary; // instruction

// console.log(sallartGross) // more information
console.log("Gross salary is ", sallaryGross); // more helpful

// Tax calculations
const paye = sallaryGross * 0.16;
console.log("For gross salary of ", sallaryGross, " Paye is", paye);

// ->
const nhif = 2500;
console.log("Nhif deduction ", nhif);

const sha = 2500;
console.log("SHA is ", sha);

const totalDeductions = paye + nhif + sha;
console.log("Total deduction are ", totalDeductions);

const netSallary = sallaryGross - totalDeductions;
console.log("Your net sallary is ", netSallary);