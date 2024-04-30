const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n').filter(line => line.trim() !== '');
            const students = {};

            lines.forEach(line => {
                const [firstName, lastName, field] = line.split(',');
                if (!students[field]) {
                    students[field] = [firstName];
                } else {
                    students[field].push(firstName);
                }
            });

            resolve(students);
        });
    });
}

module.exports = { readDatabase };
