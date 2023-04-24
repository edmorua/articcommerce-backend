import express from 'express';
import userController from '../controllers/user.controller';
import * as userSchema from '../schemas/UserI.json';
import validateSchema from '../middlewares/SchemaValidator';

const userRoute = express.Router();

userRoute.post('/',validateSchema(userSchema),async (req: express.Request, res: express.Response) => {
  return await userController.createUser(req, res);
});

userRoute.get('/', async (req: express.Request, res: express.Response) => {
  return await userController.getAllUsers(req, res);
});

userRoute.get('/:id', async (req: express.Request, res: express.Response) => {
  return await userController.getUserById(req, res);
});

export default userRoute;