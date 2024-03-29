import { Request, Response, Router } from 'express';
import { get } from '../decorators/rest.decorator';
import { CookieMakerApp } from '..';
import { MyRoute } from "../types/my-route";
import { BaseRouter } from './base';

export class OrderRouter extends BaseRouter implements MyRoute {
    public readonly urlPrefix = '/order';

    @get('/summary')
    private summary = (req: Request, res: Response): void => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };

    @get('/thanks')
    private thanks = (req: Request, res: Response): void => {
        const {sum} = this.cmapp.getCookieSettings(req);

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    }
}