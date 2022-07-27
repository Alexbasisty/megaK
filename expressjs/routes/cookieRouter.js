/* eslint-disable no-plusplus */
const express = require('express');

const cookieRouter = express.Router();

cookieRouter
    .post('/set', (req, res) => {
        const { name } = req.body;
        res
            .cookie('name', name, {
                maxAge: 1000 * 60 * 60 * 24 * 30,
            })
            .render('cookie-set', {
                name,
            });
    })
    .get('/show', (req, res) => {
        const { name } = (req.cookies);
        res.send(name)
    })
    .get('/check', (req, res) => {
        const { name } = (req.cookies);
        res.send(
            name === undefined ? 'Nie ma imienia' : 'Imię jest zapamiątane'
        );
    })
module.exports = {
    cookieRouter,
};
