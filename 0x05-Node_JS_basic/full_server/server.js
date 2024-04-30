import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app;
