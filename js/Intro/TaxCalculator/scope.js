/*
 anything inside { } is called a block code
 examples are functions, if , while, for
 check for a scope going out ward
 */

let name = "faith";
console.log(`name ${name} line 10`);

function sayMyname() {
  let name = "Loice";
  //let name = "Mark";
  console.log(`name ${name} line${10}`);

  if (true) {
    let name = "Brian";
    console.log(`name ${name}  line${19}`);
  }
  console.log(`name ${name}  line${22}`);
}

sayMyname();
