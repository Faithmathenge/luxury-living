//comparison operators evaluate ton only true or false
// Equality ===
//strict Equality ===
//Inequality !=
//strict Inequality !==


let numb1="44"
let numb2=44
//string===number =>false
let strictEquality = numb1 === numb2;

console.log(`numb1=${numb1} === numb2=${numb2} 
Ans ${strictEquality} its type is ${typeof strictEquality}`);

let nonStrictEquality = numb1 == numb2;

console.log(`numb1=${numb1} == numb2=${numb2}
  Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`);


 
  let numb3=40;
  let numb4=10;

  let str1="A";
  let str2="b";


console.log(`numb3=${numb3} and numb4=${numb4}`);
console.log(`str1=${str1} and str2=${str2}`);

console.log(`numb3 > numb4 ${numb3 > numb4}`);
console.log(`str2 > str1 ${str2 > str1}`);

console.log(`numb3 >= numb4 ${numb3 >= numb4}`);
console.log(`str2 >= str1 ${str2 >= str1}`);

console.log(`numb3 < numb4 ${numb4 > numb3}`);
console.log(`str2 < str1 ${str2 < str1}`);

console.log(`numb3 <= numb4 ${numb3 <= numb4}`);
console.log(`str2 <= str1 ${str2 <= str1}`);