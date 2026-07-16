/*
the Dom properties
getelementbyId
getElementByClassName

Updatethedom
.inner text
.inter html


Query Selector ...gives you a single item
By tag = just use the tag eg <p>
by id
by class
*/

const myDiv = document.getElementById("div1");
console.log(myDiv);

const items = document.getElementsByClassName("list-item");
console.log(items);

const div = document.querySelector("#div1");
console.log(div);

const firstItem = document.querySelector(".list-item");
console.log(firstItem);

const allItems = document.querySelectorAll(".list-item");
console.log(allItems);

for (let i = 0; i < allItems.length; i++) {
  console.log(allItems[i]);
}

