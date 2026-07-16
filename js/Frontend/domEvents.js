// if something happens i want to be notified
//call backs
//click, hovers, type
//before attaching an event. you want to be able to access the btn

//add eventlistener (@param1, @param2)

const button = document.getElementById("btn");

button.addEventListener("click", clickAlert);
function clickAlert(event) {
  console.log(event);
  alert("Button was clicked");
}

button.addEventListener("mouseover", mouseOver);
function mouseOver(event) {
  onsole.log(new Date());
  console.log(event);
}

window.addEventListener("mousemove", (e) => {
  document.getElementById("coordinates").innerText =
    `X: ${e.clientX}, Y: ${e.clientY}`;
});
