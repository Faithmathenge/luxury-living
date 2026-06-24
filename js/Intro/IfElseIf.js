let age = prompt("Enter your age");
alert(`you entered ${age}`);

if (age < 12) {
  alert("you are a baby");
} else if (age > 18) {
  alert("you are a teen");
} else if (age > 27) {
  alert("you are an aldult");
} else if (age > 45) {
  alert("Best for marriage");
} else if (age > 50) {
  alert("Best age for Retirement");
} else {
  alert("you are an Ancestor");
}
