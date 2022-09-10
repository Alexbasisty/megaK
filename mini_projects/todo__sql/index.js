const express = require('express');
const hbs = require('express-handlebars');
const { TodoRecord } = require('./records/todo.record');
const { todoRouter } = require('./routers/todo');
const { pool } = require('./utils/db');

const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());

app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    //helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/todo', todoRouter);

app.listen(3000, 'localhost', () => {
    console.log('Listening on localhost:3000');
});

// (async () => {
//     const [allRecords] = await TodoRecord.findAll();

//     console.log(allRecords);

//     await pool.end();
// })();
