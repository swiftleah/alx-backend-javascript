const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('*', (req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Error</title>
        </head>
        <body>
        <pre>Cannot GET ${req.url}</pre>
        </body>
        </html>
    `);
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

