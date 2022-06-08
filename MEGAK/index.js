const { createServer } = require('http');
const { readFile } = require('fs').promises;

const server = createServer();

server
    .on('request', async (req, res) => {
        const html = await readFile('./index.html', 'utf-8');

        res.writeHead(200, {
            'Content-Type': 'text/html',
            'accept-language': 'uk-UA',
        });
        res.end(html);
    })
    .listen(3000, 'localhost');
