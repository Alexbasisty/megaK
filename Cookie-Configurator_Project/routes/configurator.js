const express = require('express');

const configRouter = express.Router();

configRouter
    .get('/select-base/:baseName', (req, res) => {
        const { baseName } = req.params;

        res
            .cookie('cookieBase', baseName)
            .render('configurator/base-selected', {
                baseName,
            });
    });

module.exports = {
    configRouter,
}