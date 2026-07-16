/*
how to work with forms
onsubmit - you have to prevent the default behavior.vevent is attached to form
onclick

*/

document.getElementById("form1").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log(name);
  console.log(email);
}
