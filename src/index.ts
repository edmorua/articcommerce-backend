
import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './configs/db.config';
import testRoute from './routes/test.route';

const PORT = process.env.PORT || 4040;
const app: Express = express();

app.use(bodyParser.json());

async function init() {
  try {
    await sequelize.sync();
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

app.get('/', (req: Request, res: Response) => {
  res.send('Artic Commerce is alive!');
});

app.use('/test', testRoute);



