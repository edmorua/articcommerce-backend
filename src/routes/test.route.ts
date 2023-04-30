import express from 'express';
import testController from '../controllers/test.controller';

const testRoute = express.Router();

testRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await testController.getTestById(req, res);
});

testRoute.get('/', async (req: express.Request, res: express.Response) => {
  return await testController.getAll(res);
});

testRoute.post('/', async (req: express.Request, res: express.Response) => {
  return await testController.createTest(req, res);
});

testRoute.post('/dev', async (req: express.Request, res: express.Response) => {
  return await testController.fillDevDB(req, res);
});
export default testRoute;
