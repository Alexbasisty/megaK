const express = require('express');
const path = require('path');

const app = express();
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/styles/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles', 'style.css'));
});
app.get('/scripts/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'scripts', 'script.js'));
});

app.listen(3000, 'localhost', () => {
    console.log('Nasłuchuję na http://localhost:3000/');
});
