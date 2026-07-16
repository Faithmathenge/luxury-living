const requestOptions = {
  method: "GET",
  redirect: "follow",
};

/*
fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log("type of result", typeof result);
  })
  .catch((error) => console.error(error));
  */

/*
  let  users =[]
  users=getUsers()//github<>time x, 
  //uncertain and takes time. promise
  */

/*
let flow = "This is flow";
console.log("23", flow);
fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("line 27");
    flow = "updated flow";
    console.log("type of result", typeof result);
    console.log(result);
  });

console.log("33:", flow);
*/

let result = fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {});
console.log(result);
