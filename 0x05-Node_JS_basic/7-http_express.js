const express = require('express');
const countStudents = require('./3-read_file_async');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const dbName = process.argv[2];
    
    countStudents(dbName)
        .then(() => {
            res.write('This is the list of our students\n');
            const { stdout } = require('process');
            stdout.on('data', data => {
                res.write(data);
            });
            res.end();
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

