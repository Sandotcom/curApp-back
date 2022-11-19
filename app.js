import express from 'express';
import createError from 'http-errors';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.use('/', routes);

app.use((req, res, next) => {
  next(createError(404, `Cannot ${req.method} ${req.originalUrl}`));
});

app.use(errorHandler);

export default app;
