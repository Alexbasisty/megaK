const { createHmac, pbkdf2 } = require('crypto');
const { hash, compare } = require('bcrypt');

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

hash(originalText, 10, (err, hashString) => { // '10' here is an amount of ronds of making salt
    if (err) throw err;

    console.log(hashString);

    compare(originalText, hashString, (error, res) => {
        if (error) console.error(error);
        if (res) {
            console.log('Logged in!');
        } else {
            console.log('Nope!');
        }
    });
});
