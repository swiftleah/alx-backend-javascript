const { createServer } = require('http');
const { readFile } = require('fs');

function writeStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', ((err, data) => {
      if (err) {
        const error = new Error('Cannot load the database');
        reject(error);
      } else {
        let response = '';

        const lines = data.split('\n').filter((line) => line !== '').slice(1);
        const items = lines.map((line) => line.split(','));

        response += `Number of students: ${items.length}`;

        const studentsByFields = {};
        items.forEach((item) => {
          const firstName = item[0];
          const field = item[3];

          if (!studentsByFields[field]) {
            studentsByFields[field] = [firstName];
          } else {
            studentsByFields[field].push(firstName);
          }
        });

        for (const field in studentsByFields) {
          if (Object.hasOwnProperty.call(studentsByFields, field)) {
            const names = studentsByFields[field].join(', ');
            const count = studentsByFields[field].length;
            response += `\nNumber of students in ${field}: ${count}. List: ${names}`;
          }
        }

        resolve(response);
      }
    }));
  });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('');
    writeStudents(process.argv[2])
      .then((data) => res.end(`This is the list of our students\n${data}`))
      .catch((error) => {
        res.end(error.stack);
      });
  }
}).listen(1245);

module.exports = app;
