const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const { TodoRecord } = require('./records/todo.record');
const { homeRouter } = require('./routers/home');
const { todoRouter } = require('./routers/todo');
const { pool } = require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
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

app.use('/', homeRouter);
app.use('/todo', todoRouter);
// app.get('/test', async (req, res) => {
//     const result = await TodoRecord.findAll();
//     console.log(result);
//     res.send(result);
// });
// app.get('/test', async (req, res) => {
//     const oneRec = await TodoRecord.find('feed498f-097c-4606-9b6a-375b0f2f4f8d');
//     console.log(oneRec);
//     res.send(oneRec);
// });

app.listen(3000, 'localhost', () => {
    console.log('Listening on localhost:3000');
});
