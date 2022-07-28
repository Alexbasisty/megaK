const express = require('express');
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers');

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        const sum = handlebarsHelpers['find-price'](Object.entries(COOKIE_BASES), 'light')
            + ['coconut', 'honey'].reduce((prev, curr) => prev + handlebarsHelpers['find-price'](Object.entries(COOKIE_ADDONS), curr), 0);

        res.render('home/index', {
            cookie: {
                base: 'light',
                addons: ['coconut', 'honey'],
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),
            sum,
        });
    });

module.exports = {
    homeRouter,
}