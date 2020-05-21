import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;