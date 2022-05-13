const { readFile, writeFile, stat, readdir } = require('fs').promises;

const FILE_NAME = './data/index1.json';



try {
  const showFiles = async path => {
    const list = await readdir(path);
  
    for(const item of list) {
      console.log(item);
      const recursePath = `${path}/${item}`
      const itemStat = await stat(recursePath);
      if(itemStat.isDirectory()) {
        await showFiles(recursePath);
      }
    }
  };
  showFiles('.');
  
} catch (error) {
  console.log('ooops');
}




// (async () => {
//   try {
//     const data = JSON.parse(await readFile(FILE_NAME, "utf-8"));  
//     const sum = JSON.stringify(data.reduce((prev, curr) => prev + curr, 0))
    
//     writeFile('./data/sum.txt', sum, 'utf-8')
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.log('FIle name is not valid');
//     } else {
//       console.log('oh no, unknown error', error);      
//     }
//   }
// })();
