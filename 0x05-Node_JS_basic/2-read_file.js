const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.split('\n');

        let csCount = 0;
        let sweCount = 0;
        let csList = [];
        let sweList = [];

        for (const line of lines) {
            const fields = line.split(',');

            if (fields[0] && fields[1]) {
                if (fields[3].trim() === 'CS') {
                    csCount++;
                    csList.push(fields[0]);
                } else if (fields[3].trim() === 'SWE') {
                    sweCount++;
                    sweList.push(fields[0]);
                }
            }
        }

        console.log(`Number of students: ${csCount + sweCount}`);
        console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
