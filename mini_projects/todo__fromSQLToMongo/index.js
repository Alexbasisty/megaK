const { TodoRecord } = require('./records/todo.record');
const { TodoRepository } = require('./repositories/todo.repository');
const { client } = require('./utils/db');

(async () => {
    try {
        const todo = await TodoRepository.find('632ef77829fbc206e5a3d9d6');

        todo.title = 'Pracujemy nad update-em';

        await TodoRepository.update(todo);

        console.log(await TodoRepository.find('632ef77829fbc206e5a3d9d6'));
    } finally {
        await client.close();
    }
})();
