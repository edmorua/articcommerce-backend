import express from 'express';
import productController from '../controllers/product.controller';

const productRoute = express.Router();

productRoute.post('/', async (req: express.Request, res: express.Response) => {
  return await productController.createProduct(req, res);
});

productRoute.get('/', async (req: express.Request, res: express.Response) => {
  return await productController.getAllProducts(req, res);
});

productRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await productController.getProductById(req, res);
});

export default productRoute;
