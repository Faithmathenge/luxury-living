const otherFruits = ["kiwi", "Pineapple", "Dragon Fruit"];
const originalDiv = document.getElementById("div1").innerHTML;

console.log(originalDiv);

function original() {
  console.log("original clicked");
  document.querySelector("#div1").innerHTML = originalDiv;
}

function updateFruits() {
  console.log("update fruits clicked");
  const fruits = document.querySelectorAll(".list-item");
  for (let i = 0; i < fruits.length; i++) {
    fruits[i].innerText = otherFruits[i];
  }
}

function replace() {
  console.log("replace clicked");
  const newHtml = `
  <h3> List Chores</h3>
  <ul>
  <li class ="list-item">Mango</li>
  <li class ="list-item">Banana</li>
  <li class ="list-item">Tangerine</li>
 </ul>
  `;
  document.querySelector("#div1").innerHTML = newHtml;
}
