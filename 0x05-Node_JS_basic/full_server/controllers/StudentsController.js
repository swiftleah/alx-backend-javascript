const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase('./database.csv');
            const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

            res.status(200).send('This is the list of our students\n' +
                fields.map(field => {
                    const count = students[field].length;
                    const list = students[field].join(', ');
                    return `Number of students in ${field}: ${count}. List: ${list}`;
                }).join('\n')
            );
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major.toUpperCase();
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const students = await readDatabase('./database.csv');
            const list = students[major] ? students[major].join(', ') : '';
            res.status(200).send(`List: ${list}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = StudentsController;
