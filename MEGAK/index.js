const { stringify } = require("querystring");

const { readFile, writeFile, appendFile } = require("fs").promises;

const FILE_NAME = './data/hello.txt';

(async () => {
  try {
    const data = (await readFile(FILE_NAME, 'utf-8')).split(';');
  
    const numberToMultiply = Number(data[-1]) || Number(data[data.length - 2]);
    console.log(numberToMultiply);

    await appendFile(FILE_NAME, `\n${(numberToMultiply * 2).toString()};`, 'utf-8');
  } catch (error) {
    console.log('Co jest?', error);
  }
})();
