const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        countStudents('database.csv')
            .then(() => {
                res.end('This is the list of our students\n');
            })
            .catch((error) => {
                res.statusCode = 500;
                res.end(error.message + '\n');
            });
    } else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

