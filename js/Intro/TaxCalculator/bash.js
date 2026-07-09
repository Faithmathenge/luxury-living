//create an application

const { error } = require("console");

const fs = require("fs");

function assignmentFile() {
  const fileName = `${Date.txt}`;
  let data = "";
  for (let i = 1; i <= 10000; i++) {
    data += "tis shit hard sometimes mehn\n";
    const cb = (error) => {};
    fs.appendFile(fileName, data, cb);
  }
}
assignmentFile();
