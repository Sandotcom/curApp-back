import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';
import { CONNECTION_URL, PORT } from './config/config.js';

dotenv.config();

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log('✔ Database connection has been established successfully.');
    app.listen(PORT, () => console.log(`✔ Server running on port ${PORT}...`));
  })
  .catch((error) => {
    console.error('✖ Unable to connect to the database :\n', error);
    process.exit(1);
  });
