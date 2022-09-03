const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'cars',
    });

    const [answer] = await conn.execute('SELECT * FROM `cars` WHERE `registrationNo` = "PO1GE44";');

    console.log(answer);

})();