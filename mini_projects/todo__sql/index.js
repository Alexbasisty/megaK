const { TodoRecord } = require("./records/todo.record");
const { pool } = require("./utils/db");

(async () => {
    const foundTodo = await TodoRecord.find('feed498f-097c-4606-9b6a-375b0f2f4f8d');
    foundTodo.title = 'Zrobić update zadania';

    await foundTodo.update();

    await pool.end();
})();
