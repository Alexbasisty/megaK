const express = require('express');
const { COOKIE_ADDONS, COOKIE_BASES } = require('../data/cookies-data');
const { getAddonsFromRequest } = require('../utils/get-addons-from-request');

const configRouter = express.Router();

configRouter
    .get('/select-base/:baseName', (req, res) => {
        const { baseName } = req.params;

        if (!COOKIE_BASES[baseName]) {
            return res.render('error', {
                description: `There is no such base - ${addonName}`,
            });
        };

        res
            .cookie('cookieBase', baseName)
            .render('configurator/base-selected', {
                baseName,
            });
    })
    .get('/add-addon/:addonName', (req, res) => {
        const { addonName } = req.params;

        if (!COOKIE_ADDONS[addonName]) {
            return res.render('error', {
                description: `There is no such addon - ${addonName}`,
            });
        };

        const addons = getAddonsFromRequest(req);

        if (addons.includes(addonName)) {
            return res.render('error', {
                description: `The ${addonName} already has been added, You cannot do this twice`,
            });
        }

        addons.push(addonName);

        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/added', {
                addonName,
            });
    })
    .get('/remove-addon/:addonName', (req, res) => {
        const { addonName } = req.params;

        const oldAddons = getAddonsFromRequest(req);

        if (!oldAddons.includes(addonName)) {
            return res.render('error', {
                description: `Cannot remove ${addonName}. There is no such addon in menu`,
            });
        }

        const addons = oldAddons.filter(el => el !== addonName);

        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/removed', {
                addonName,
            });
    });

module.exports = {
    configRouter,
}