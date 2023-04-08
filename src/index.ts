
import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './db.config';
import { MainRoutes } from './utils/RoutePaths'; 
import testRoute from './routes/test.route';
import userRoute from './routes/user.route';
import productRoute from './routes/product.route';

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

app.use(MainRoutes.TEST, testRoute);
app.use(MainRoutes.USER, userRoute);
app.use(MainRoutes.PRODUCT, productRoute);




