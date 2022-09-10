const express = require('express');
const { TodoRecord } = require('../records/todo.record');

const todoRouter = express.Router();

todoRouter
    .get('/', async (req, res) => {
        const todos = await TodoRecord.findAll();
        res.render('todo/list-all', {
            todos,
        });
    })
    .get('/:id', async (req, res) => {
        res.render('todo/one', {
            todo: await TodoRecord.find(req.params.id),
        });
    })
    .get('/form/edit/:id', async (req, res) => {
        res.render('todo/forms/edit', {
            todo: await TodoRecord.find(req.params.id),
        });
    })
    .post('/', async (req, res) => {
        const newRecord = new TodoRecord({
            title: req.body.title,
        });
        await newRecord.create();

        res.render('todo/added', {
            title: req.body.title,
            id: newRecord.id,
        });
    })
    .put('/:id', async (req, res) => {
        const todoToChange = await TodoRecord.find(req.params.id);
        todoToChange.title = req.body.title;
        todoToChange.update();
        res.render('todo/modified', {
            id: req.params.id,
        });
    })
    .delete('/:id', async (req, res) => {
        const recordToDelete = await TodoRecord.find(req.params.id);
        await recordToDelete.delete();

        res.render('todo/deleted');
    });

module.exports = {
    todoRouter,
};
