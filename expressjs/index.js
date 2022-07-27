const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const { cookieRouter } = require('./routes/cookieRouter');

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use('/cookie', cookieRouter);
app.get('/hi', (req, res) => {
    res.render('home', {
        person: {
            name: 'Alex',
            age: '36',
            days: [1, 2, 3, 4, 5, 5, 6, 7],
        },
    });
});

app.listen(3000, 'localhost');
