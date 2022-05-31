/* eslint-disable no-shadow */
const { createHmac, createDecipheriv, createCipheriv } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);

async function encryptText(text, password, salt) {
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16);

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');

    return {
        encrypted,
        iv: iv.toString('hex'),
    };
}

async function decryptText(text, password, salt, ivHex) {
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = Buffer.from(ivHex, 'hex');

    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
};

function hash (hash, salt) {
    return createHmac('sha512', salt)
        .update(hash)
        .digest('hex');
}

module.exports = {
    encryptText,
    decryptText,
    hash,
};
