const { readFile } = require("fs");

console.log("Hello world");

readFile("./index.js", "utf-8", (err,data) => {
  console.log(data);
});
