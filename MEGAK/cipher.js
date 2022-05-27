const { createHmac, pbkdf2 } = require('crypto');
const { hash } = require('bcrypt');

const salt = 'Askjfa&)##()*# lkja  oei jwe))(* jfklas<L:AKFJLDFJWEOfj39439834823498pJKL:LJL;fdadl';
const originalText = 'Tekst do zhaszowania';

// First version
const hashCrypto = createHmac('sha512', salt)
    .update(originalText)
    .digest('hex');

console.log(hashCrypto);

// second version
pbkdf2(originalText, salt, 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString('hex'));
});

// Third version - the safest

hash(originalText, 10, (err, hashString) => {
    if (err) throw err;

    console.log(hashString);
});
