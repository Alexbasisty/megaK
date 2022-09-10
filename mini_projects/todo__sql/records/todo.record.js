/* eslint-disable no-underscore-dangle */
const { v4: uuid } = require('uuid');
const { pool } = require('../utils/db');

class TodoRecord {
    constructor(obj) {
        this.title = obj.title;
        this.addedAt = obj.addedAt;
        this.id = obj.id;

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

    async create() {
        this.id = this.id ?? uuid();
        await pool.execute('INSERT INTO `todos` VALUES(:id, :title, :addedAt)', {
            id: this.id,
            title: this.title,
            addedAt: new Date(),
        });

        return this.id;
    }

    async update() {
        if (!this.id) {
            throw new Error('Todo has no id');
        }
        this._validate();

        await pool.execute('UPDATE `todos` SET `title` = :title WHERE `id` = :id', {
            id: this.id,
            title: this.title,
        });

        return this.id;
    }

    async delete() {
        if (!this.id) {
            throw new Error('Todo has no id');
        }

        await pool.execute('DELETE FROM `todos` WHERE `id` = :id', {
            id: this.id,
        });
    }

    static async find(id) {
        const [results] = await pool.execute('SELECT * FROM `todos` WHERE `id` = :id', {
            id,
        });
        return results.length === 1 ? new TodoRecord(results[0]) : null;
    }

    static async findAll() {
        const [allRecords] = await pool.execute('SELECT * FROM `todos` ORDER BY `addedAt` ASC');
        return allRecords;
    }
}

module.exports = {
    TodoRecord,
};
