
import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response } from 'express';
import connection from './configs/db.config';

const PORT = process.env.PORT || 4040;
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Artic Commerce is alive!');
});

async function init() {
  try {
    await connection.sync();
    console.log('Successfully connecting to the database');
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('error', error);
    process.exit(1);
  }
}

init();
