import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/user.route';

createConnection().then(async () => {
  dotenv.config()
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`);
  });
}).catch((error) => console.log(error));