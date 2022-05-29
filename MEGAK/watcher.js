const { watch } = require('chokidar');
// const commander = require('commander');
const { readFile } = require('fs').promises;

const readPath = (path) => {
    readFile(path, 'utf-8')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
readPath('./test.js');

watch('./*.js', {
    awaitWriteFinish: true,
})
    .on('all', (path) => {
        console.log(path);
    })
    .on('add', (path) => {
        console.log(path);
        readPath(path);
    })
    .on('change', (path) => {
        readPath(path);
    });

// **/*.js ddsd
