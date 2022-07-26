/* eslint-disable no-plusplus */
const express = require('express');

const cookieRouter = express.Router();

cookieRouter
    .get('/check', (req, res) => {
        const info = Object.entries(votes).map(([name, votesCount]) => `Votes on ${name}: ${votesCount}`).join('<br>');
        res.send(info);
    });

module.exports = {
    cookieRouter,
};
