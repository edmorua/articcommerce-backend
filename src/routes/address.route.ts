import express from 'express';
import addressController from '../controllers/address.controllet';

const addressRoute = express.Router();

addressRoute.post('/', async (req: express.Request, res: express.Response) => {
  return await addressController.createAddress(req, res);
});

addressRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await addressController.getAddressById(req, res);
});

export default addressRoute;