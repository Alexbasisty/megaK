const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'cars',
        decimalNumbers: true,
        namedPlaceholders: true,
    });

    const cars = [
        {
            registrationNo: 'PO1GI53',
            brand: 'Mercedes',
            model: 'AMG',
            color: '#000000 METALLIC',
            registrationAt: '2021-08-29',
            price: 200000
        },
        {
            registrationNo: 'P81GI53',
            brand: 'Mercedes',
            model: 'AMG',
            color: '#dedede METALLIC',
            registrationAt: '2022-08-29',
            price: 300000
        },
        {
            registrationNo: 'P11GI53',
            brand: 'Mercedes',
            model: 'AMG',
            color: '#000000 METALLIC',
            registrationAt: '2022-08-29',
            price: 500000
        }
    ];

    const statement = await conn.prepare('INSERT INTO `cars` VALUES(?, ?, ?, ?, ?, ?);')

    try {
        for (const car of cars) {
            await statement.execute(Object.values(car));
        }
    } finally {
        statement.close();
    }

})();