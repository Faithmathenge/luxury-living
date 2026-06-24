// Comparison operators 
//and wants everything to be true



let val1=true
let val2= false

console.log(`val1=${val1} val2=${val2} val1&val2=${val1&&val2}`)


let faith_age=26;
let faith_balance=1000000;
let result =val1 && val2

///if faith age is greater than 18 and has more than 20k in her account

let is_greater_than_18=faith_age>18
console.log(`is faith age greater than 18 ${is_greater_than_18}`)

let has_more_than_20k=faith_balance>20000
console.log(`faith has more than 20k ${has_more_than_20k}`)

console.log(
  `faith is greater than 18 and has more than 20k in her account
  ${is_greater_than_18&&has_more_than_20k}
  `)


  //simplified version
  let simplified=faith_age>18&&faith_balance>20000
  console.log(`simplified ${simplified}`)
  console.log(`further simplication is ${faith_age>18&&faith_balance>20000}`)
  

  //Truthy or Falsey
//if something is not falsey then it is truthy
//FALSEY
//false
//0
//null
//undefined
//"" empty string
//Nan


  
console.log(`
Faith is age is greater than 18
or she has more than 20k in her account
${is_greater_than_18 || has_more_than_20k}
`);

 let userName1="Mark chege"
 let userName2="0"

 let activeUserName=userName2 || userName1
 console.log(activeUserName)

 let bothUserNameOk=userName1&&userName2
 console.log(bothUserNameOk)

 //
//|| returns the first truthy value
//&& returns the last value when everything is truthy
//&& returns the first falsy value or the last value if everything is truthy
//