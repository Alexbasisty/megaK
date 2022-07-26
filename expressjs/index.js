const express = require('express');
const cookieParser = require('cookie-parser');
const { cookieRouter } = require('./routes/cookieRouter');

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.static('public'));

app.use('/cookie', cookieRouter);

app.listen(3000, 'localhost');
