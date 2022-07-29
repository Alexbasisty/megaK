const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');

const { homeRouter } = require('./routes/home');
const { configRouter } = require('./routes/configurator');
const { orderRouter } = require('./routes/order');
const { handlebarsHelpers } = require('./utils/handlebars-helpers');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());

app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/configurator', configRouter);
app.use('/order', orderRouter);

app.listen(3000, 'localhost');


