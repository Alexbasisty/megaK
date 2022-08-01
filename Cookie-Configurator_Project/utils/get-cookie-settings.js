const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies-data');
const { getAddonsFromRequest } = require('../utils/get-addons-from-request');
const { handlebarsHelpers } = require('../utils/handlebars-helpers');

function getCookieSettings(req) {
    const { cookieBase: base } = req.cookies;

    const addons = getAddonsFromRequest(req);

    const allBases = Object.entries(COOKIE_BASES);
    const allAddons = Object.entries(COOKIE_ADDONS);

    const sum = (base ? handlebarsHelpers['find-price'](allBases, base) : 0)
        + addons.reduce((prev, curr) => prev + handlebarsHelpers['find-price'](allAddons, curr), 0);

    return {
        addons,
        base,
        sum,
        allAddons,
        allBases,
    }
}

module.exports = {
    getCookieSettings,
}