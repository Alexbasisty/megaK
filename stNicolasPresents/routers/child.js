const { Router } = require('express');
const { ChildRecord } = require('../records/child.record');
const { GiftRecord } = require('../records/gift.record');
const { ValidationError } = require('../utils/error');

const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();

        res.render('children/list', {
            childrenList,
            giftsList,
        })
    })
    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body);
        await newChild.insert();

        res.redirect('/child');
    })
    .patch('/gift/:childId', async (req, res) => {
        const child = await ChildRecord.getOne(req.params.childId);

        if (child === null) {
            throw new ValidationError('Nie znależono dziecka z takim id')
        }

        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

        if (gift) {
            if (gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('Tego prezentu jest zamało')
            }
        }

        child.giftId = gift?.id ?? null//znaczy to samo co --> gift === null ? null : gift.id;
        child.update();

        res.redirect('/child');
    });

module.exports = {
    childRouter,
}