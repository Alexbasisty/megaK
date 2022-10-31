import { Request, Response, Router } from 'express';
import { get } from '../decorators/rest.decorator';
import { MyRoute } from '../types/my-route';
import { BaseRouter } from './base';

export class HomeRouter extends BaseRouter implements MyRoute {
    public readonly urlPrefix = '/';

    @get('/')
    private home = (req: Request, res: Response): void => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };
}
