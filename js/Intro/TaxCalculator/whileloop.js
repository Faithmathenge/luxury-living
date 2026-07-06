/*
loops enable you to run a block of code over and over again
you should not loop too many times or you will crash your browser
you should have an exit condition
syntax:
while(condition){
  //code to run if condition is true
  //exit if condition is false
}
*/

let n = 0
let condition = true

while(condition){
  console.log("n is", n)
  n = n + 1
  if(n > 100){
    condition = false
  }
}

