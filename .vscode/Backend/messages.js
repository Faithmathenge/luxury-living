const data = require("./data.json");
const fs = require("fs");
console.log(data);
const output = [];

for (let i = 0; i < data.length; i++) {
  let person = data[i];
  let title;
  if (person.gender === "Male") {
    title = "Sir";
  } else {
    title = "Madam";
  }
  let message = `Dear ${title} ${person.first_name} ${person.last_name}
  We regret to inform you that you wont be going to the next stage of the interview.We
  The reason is: You did not have any experience.`;

  console.log(message);
  output.push({
    id: person.id,
    first_name: person.first_name,
    last_name: person.last_name,
    email: person.email,
    gender: person.gender,
    phone: person.phone,
    message: message,
  });
}
console.log(output);
const outputText = JSON.stringify(output);
fs.writeFile("output.json", outputText, (error) => {});
