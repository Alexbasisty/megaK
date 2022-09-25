const { TodoRecord } = require('./records/todo.record');
const { client } = require('./utils/db');

(async () => {
    try {
        // eslint-disable-next-line no-restricted-syntax
        for await (const todo of await TodoRecord.findAllWithCursor()) {
            const record = new TodoRecord(todo);
            record.title += ' [updated]';
            await record.update();
            console.log(record);
        }
    } finally {
        await client.close();
    }
})();
