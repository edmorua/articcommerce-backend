
import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './db.config';
import { ApiVersion, MainRoutes } from './utils/RoutePaths';
import testRoute from './routes/test.route';
import clientRoute from './routes/client.route';
import productRoute from './routes/product.route';
import addressRoute from './routes/address.route';
import envVars from './envVars';
import categoryRoute from './routes/category.route';

const { PORT } = envVars;
const app: Express = express();
const exitError = 1;
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
    process.exit(exitError);
  }
}

init();

app.get('/', (req: Request, res: Response) => {
  res.send('Artic Commerce is alive!');
});

app.use(`${ApiVersion.V1}${MainRoutes.TEST}`, testRoute);
app.use(`${ApiVersion.V1}${MainRoutes.CLIENT}`, clientRoute);
app.use(`${ApiVersion.V1}${MainRoutes.PRODUCT}`, productRoute);
app.use(`${ApiVersion.V1}${MainRoutes.ADDRESS}`, addressRoute);
app.use(`${ApiVersion.V1}${MainRoutes.CATEGORY}`, categoryRoute);
