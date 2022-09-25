/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');

class TodoRecord {
    constructor(obj) {
        this._id = ObjectId(obj._id);
        this.title = obj.title;

        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            throw new Error('Todo title should be at least 5 characters');
        }
        if (this.title.length > 150) {
            throw new Error('Todo title should be at most 150 characters');
        }
    }
    static async insert(record) {
        TodoRepository._checkRecord(record);

        const { insertedId } = await todos.insertOne(record);
        record._id = insertedId;

        return insertedId;
    }

    static async delete(record) {
        TodoRepository._checkRecord(record);

        await todos.deleteOne({
            _id: record._id,
        });
    }

    static async find(id) {
        const todo = await todos.findOne({ _id: ObjectId(String(id)) });

        return todo === null ? null : new TodoRecord(todo);
    }

    static async findAll() {
        return todos.find().toArray();
    }

    static async update(record) {
        TodoRepository._checkRecord(record);

        await todos.replaceOne({
            _id: record._id,
        }, {
            title: String(record.title),
        });
    }
}

module.exports = {
    TodoRecord,
};
