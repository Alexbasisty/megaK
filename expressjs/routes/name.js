const express = require('express');
const { readFile, writeFile } = require('fs').promises;

const FILE_NAME = './data/name.txt';

const nameRouter = express.Router();

nameRouter
    .get('/set/:name', async (req, res) => {
        const name = req.params.name;
        await writeFile(FILE_NAME, name, 'utf-8');
        res.send(name);
    })

    .get('/show', async (req, res) => {
        const name = await readFile(FILE_NAME, 'utf-8');
        
        res.send(name);
    })

    .get('/check', async (req, res) => {
        try {
            await readFile(FILE_NAME, 'utf-8');
            res.send('There is a name');
        } catch (error) {
            res.send(`No name here, ${error}`);
        }
    });

    

module.exports = {
    nameRouter,
}