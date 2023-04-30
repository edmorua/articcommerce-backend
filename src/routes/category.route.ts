import express from 'express';
import categoryController from '../controllers/category.controller';
const categoryRoute = express.Router();

categoryRoute.post('/', async (req: express.Request, res: express.Response) => {
  return await categoryController.createCategory(req, res);
});

categoryRoute.get('/', async (req: express.Request, res: express.Response) => {
  return await categoryController.getAllCategories(req, res);
});

categoryRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await categoryController.getCategoryById(req, res);
});

categoryRoute.get('/:id/subcategories', async (req: express.Request, res: express.Response) => {
  return await categoryController.getSubcategories(req, res);
});

export default categoryRoute;
