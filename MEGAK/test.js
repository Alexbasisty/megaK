const fs = require('fs');

fs.access('./test.txt', (err) => {
    console.log(err ? 'plik nie istnieje' : 'plik istnieje');
});

// rename

fs.rename('watchers.js', 'watcher.js', (err) => {
    if (err) {
        console.log('Błąd');
    }
});
