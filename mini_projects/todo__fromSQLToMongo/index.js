const { TodoRecord } = require('./records/todo.record');
const { client } = require('./utils/db');

(async () => {
    try {
        const todo = await TodoRecord.find('632ef77829fbc206e5a3d9d6');

        console.log(todo);
    } finally {
        await client.close();
    }
})();
