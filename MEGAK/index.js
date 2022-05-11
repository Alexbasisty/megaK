const { readFile } = require("fs");
const { promisify } = require("util");
const { lookup, promises } = require("dns");

console.log("Hello world");

const readFilePromised = promisify(readFile);
const lookupPromise = promisify(lookup);

const host = 'google.com';

lookupPromise(host)
  .then(data => console.log(data.address));

(async () => {
  try {
    const hostIP = await promises.lookup(host);

    console.log(hostIP.address);
  } catch (error) {
    console.log('ooops', error);
  }
})();

lookup(host, (err, data) => {
  console.log(data);
});

// (async () => {
//   try {
//     const data = await readFilePromised("./index.js", "utf-8")
//     console.log(data);    
//   } catch (error) {
//     console.log(error);
//   }
// })();