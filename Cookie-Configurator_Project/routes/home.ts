import { Request, Response, Router } from 'express';
import { CookieMakerApp } from '..';
import { MyRoute } from '../types/my-route';

export class HomeRouter implements MyRoute {
    public readonly urlPrefix = '/';
    public readonly router: Router = Router();
    
    constructor(private cmapp: CookieMakerApp) {
        this.cmapp = cmapp;
        this.setUpRoutes();
    }

    private setUpRoutes(): void {
        this.router.get('/', this.home);
    }

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