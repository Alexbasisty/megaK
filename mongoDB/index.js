const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

(async () => {
    await client.connect();

    const db = client.db('megak_music2');
    // await db.createCollection('songs');

    // const artists = [
    //     {
    //         name: 'The Beatles',
    //         startedAt: new Date('1960-01-01 12:00'),
    //     },
    //     {
    //         name: 'Beach boys',
    //         startedAt: new Date('1960-01-01 12:00'),
    //     },
    //     {
    //         name: 'Eric Clapton',
    //         startedAt: new Date('1970-01-01 12:00'),
    //     },
    //     {
    //         name: 'Eric Clapton1',
    //         startedAt: new Date('1070-01-01 12:00'),
    //     },
    // ];

    // await db.collection('artists').insertMany(artists);


    // for await (const song of db.collection('songs').find({
    //     title: 'Beach boys',
    // })) {
    //     console.log(song);
    // };

    await db.collection('artists').deleteMany({
        startedAt: {
            $lt: new Date('1922-01-01 00:00')
        }
    })

    await client.close();
})()