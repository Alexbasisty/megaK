const { readFile, writeFile } = require('fs').promises;
const { encryptText, hash } = require('./cipher');
const { SALT, HASH_SALT } = require('./constants');

const [,, fileName, pwd] = process.argv;

(async () => {
    const content = await readFile(fileName, 'utf-8');
    const contentHash = hash(content, HASH_SALT);
    const encrypted = await encryptText(content, pwd, SALT);

    encrypted.hash = contentHash;

    await writeFile(fileName, JSON.stringify(encrypted), 'utf-8');

    console.log('Done!');
})();
