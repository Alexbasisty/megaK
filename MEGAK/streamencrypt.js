const { pipeline } = require('stream').promises;
const { createReadStream, createWriteStream } = require('fs');
const { createCipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { SALT } = require('./constants');

(async () => {
    const [,, inputFile, outputFile, pwd] = process.argv;
    const key = await scrypt(pwd, SALT, 24);
    const algoritm = 'aes-192-cbc';

    await pipeline(
        createReadStream(inputFile),
        createCipher(algoritm, key),
        createWriteStream(outputFile),
    );

    console.log('Done!');
})();
