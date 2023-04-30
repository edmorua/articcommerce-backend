import express from 'express';
import userController from '../controllers/client.controller';
import * as clientSchema from '../schemas/ClientI.json';
import validateSchema from '../middlewares/schemaValidator';

const clientRoute = express.Router();

clientRoute.post(
  '/sign-up',
  validateSchema(clientSchema),
  async (req: express.Request, res: express.Response) => {
  return await userController.createClient(req, res);
});

clientRoute.get('/', async (req: express.Request, res: express.Response) => {
  return await userController.getAllClients(req, res);
});

clientRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await userController.getClientById(req, res);
});

clientRoute.post('/login', async (req: express.Request, res: express.Response) => {
  return await userController.loginClient(req, res);
});

export default clientRoute;
