const express = require('express');
const { getCookieSettings } = require('../utils/get-cookie-settings');

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        const { sum, addons, base, allAddons, allBases } = getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    });

module.exports = {
    homeRouter,
}