/* eslint-disable no-plusplus */
const express = require('express');

const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res) => {
        const { numA, numB } = req.body;

        const devider = numA % numB === 0;

        res.json({ devider });
    });

module.exports = {
    calcRouter,
};
