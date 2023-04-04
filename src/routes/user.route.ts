import express from 'express';
import userController from '../controllers/user.controller';

const userRoute = express.Router();

userRoute.post('/', async (req: express.Request, res: express.Response) => {
  return await userController.createUser(req, res);
});

userRoute.get('/', async (req: express.Request, res: express.Response) => {
  return await userController.getAllUsers(req, res);
});

userRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await userController.getUserById(req, res);
});

export default userRoute;