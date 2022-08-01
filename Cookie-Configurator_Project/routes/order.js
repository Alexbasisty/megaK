const express = require('express');
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies-data');
const { getAddonsFromRequest } = require('../utils/get-addons-from-request');
const { handlebarsHelpers } = require('../utils/handlebars-helpers');

const orderRouter = express.Router();

orderRouter
    .get('/summary', (req, res) => {
        const { cookieBase } = req.cookies;

        const addons = getAddonsFromRequest(req);

        const sum = cookieBase
            ?
            (handlebarsHelpers['find-price'](Object.entries(COOKIE_BASES), cookieBase)
                + addons.reduce((prev, curr) => prev + handlebarsHelpers['find-price'](Object.entries(COOKIE_ADDONS), curr), 0))
            :
            0;

        res.render('order/summary', {
            cookie: {
                base: cookieBase,
                addons,
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),
            sum,
        });
    })
    .get('/thanks', (req, res) => {
        const { cookieBase } = req.cookies;

        const addons = getAddonsFromRequest(req);

        const sum = cookieBase
            ?
            (handlebarsHelpers['find-price'](Object.entries(COOKIE_BASES), cookieBase)
                + addons.reduce((prev, curr) => prev + handlebarsHelpers['find-price'](Object.entries(COOKIE_ADDONS), curr), 0))
            :
            0;

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    });

module.exports = {
    orderRouter,
}