/* eslint-disable no-plusplus */
const { createServer } = require('http');

const server = createServer();

server
    .on('request', (req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'accept-language': 'uk-UA',
        });
        const [, math, num1, num2] = req.url.split('/');
        let result = 0;

        switch (math) {
        case 'devide':
            result = Number(num1) / Number(num2);
            break;
        case 'add':
            result = Number(num1) + Number(num2);
            break;
        case 'substract':
            result = Number(num1) - Number(num2);
            break;
        case 'multiply':
            result = Number(num1) * Number(num2);
            break;

        default:
            break;
        }
        res.end(`${result}`);
    })
    .listen(3000, 'localhost');
