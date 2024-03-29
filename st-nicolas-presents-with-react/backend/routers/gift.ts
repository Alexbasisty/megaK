import { Router } from 'express';
import { GiftRecord } from '../records/gift.record';
import { CreateGiftReq, GetSingleGiftRes } from '../types';
import { ValidationError } from '../utils/error';

export const giftRouter = Router();

giftRouter
    .get('/', async (req, res) => {
        const giftsList = await GiftRecord.listAll();
        res.json({
            giftsList,
        });
    })

    .get('/:giftId', async (req, res) => {
        const gift = await GiftRecord.getOne(req.params.giftId);
        const givenCount = await gift.countGivenGifts();
        
        res.json({
            gift,
            givenCount,
        } as GetSingleGiftRes);
    })

    .delete('/:id', async (req, res) => {
        const gift = await GiftRecord.getOne(req.params.id);

        if(!gift) {
            throw new ValidationError('No such gift!')
        }
        if(await gift.countGivenGifts() > 0) {
            throw new ValidationError('Canot delete, gift is being in use!')
        }

        await gift.deleteOne();
    })

    .post('/', async (req, res) => {
        // const data = {
        //     ...req.body,
        //     count: Number(req.body.count),
        // }

        // const newGift = new GiftRecord(data);
        const newGift = new GiftRecord(req.body as CreateGiftReq);
        await newGift.insert();

        // res.redirect('/gift');
        res.json(newGift);
    });

    /* 
    **** Wersja z handlebarsami 
    
    */

    // giftRouter
    // .get('/', async (req, res) => {
    //     const giftsList = await GiftRecord.listAll();
    //     res.render('gifts/list', {
    //         giftsList,
    //     });
    // })
    // .post('/', async (req, res) => {
    //     const data = {
    //         ...req.body,
    //         count: Number(req.body.count),
    //     }

    //     const newGift = new GiftRecord(data);
    //     await newGift.insert();

    //     res.redirect('/gift');
    // });