const express = require('express');

const bookRouter = express.Router();

bookRouter
    .get('/book', async (req, res) => {
        console.log(req.cookies);

        res.send('Hi')
    });

module.exports = {
    bookRouter,
}