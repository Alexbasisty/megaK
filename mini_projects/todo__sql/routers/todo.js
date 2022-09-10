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
    .post('/', async (req, res) => {
        res.send('POst')
    })
    .put('/:id', async (req, res) => {
        res.send('Put')
    })
    .delete('/:id', async (req, res) => {
        res.send('Delete')
    });

module.exports = {
    todoRouter,
};
