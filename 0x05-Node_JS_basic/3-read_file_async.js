const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n').filter(line => line.trim() !== '');
            
            let totalStudents = 0;
            const fieldCounts = {};
            const fieldLists = {};

            lines.forEach(line => {
                const [firstName, lastName, field, age] = line.split(',');
                if (!fieldCounts[field]) {
                    fieldCounts[field] = 1;
                    fieldLists[field] = [`${firstName} (${age})`];
                } else {
                    fieldCounts[field]++;
                    fieldLists[field].push(`${firstName} (${age})`);
                }
                totalStudents++;
            });

            console.log(`Number of students: ${totalStudents}`);
            Object.entries(fieldCounts).forEach(([field, count]) => {
                console.log(`Number of students in ${field}: ${count}. List: ${fieldLists[field].join(', ')}`);
            });

            resolve();
        });
    });
}

module.exports = countStudents;

