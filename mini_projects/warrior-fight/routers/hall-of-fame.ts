import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";

export const hallOfFameRouter = Router();

hallOfFameRouter
    .get('/', async (req, res) => {
        const warriors = (
            await WarriorRecord.getTop(10)).map((warrior, index) => ({
                    place: index + 1,
                    warrior,
                })
            );
        res.render('hall-of-fame/list', {
            warriors,
        });
    });