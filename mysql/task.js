const mysql = require('mysql2/promise');
const { v4: uuid } = require('uuid');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'megaK_courses',
    namedPlaceholders: true,
    decimalNumbers: true,
});

(async () => {
    // 1
    const [result] = await pool.execute('SELECT * FROM `courses`');
    console.log(result);

    //2
    const [courses] = await pool.execute('SELECT `students`.`id`, `students`.`name`, `students`.`surname`, `courses`.`name` as "corseName" FROM `students` JOIN `students_courses` ON `students`.`id` = `students_courses`.`studentId` JOIN `courses` ON `students_courses`.`courseName` = `courses`.`name` WHERE `students`.`age` >= 18');
    console.log(courses);

    //3
    const { affectedRows: deletedStudents } = (await pool.execute('DELETE FROM `students` WHERE `age` < :age', { age: 18 }))[0];
    console.log(deletedStudents);


    //4
    const newStudentId = uuid();

    await pool.execute('INSERT INTO `students`(`id`, `name`, `surname`, `age`, `street`) VALUES(:id, :name, :surname, :age, :street)', {
        id: newStudentId,
        name: 'Ale',
        surname: 'Babr',
        age: 21,
        street: 'Senj'
    });
    console.log(newStudentId);


    await pool.end();
})();