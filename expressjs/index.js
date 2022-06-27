const express = require('express');

const app = express();

app.get('/', () => {
    console.log('Hello, World!');
})

app.listen(3000);