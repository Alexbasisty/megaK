import { Router } from "express";

export interface MyRoute {
    urlPrefix: string,
    router: Router
};