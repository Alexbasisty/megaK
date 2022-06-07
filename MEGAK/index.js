const { createServer } = require('http');

const server = createServer();

server
    .on('request', (req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.end('<h1>Привіт, Україна</h1>');
    })
    .listen(3000, 'localhost');
