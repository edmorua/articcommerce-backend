import express from 'express';
import { ErrorResponse, reportError } from '../utils/Error';
import userService from '../services/user.service';

class UserController {
  async getUserById(req: express.Request, res: express.Response) {
    const data = req.params;
    console.log({ req });
    console.log({ data });
    const { id } = data;
    try {
      if (!id) throw new ErrorResponse(400, 'No id found in the request');
      const user = await userService.getUserById(Number(id));
      return res.status(200).json(user);
    } catch (error) {
      return reportError(error, res);
    }
    
  }
  async createUser(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(400, 'No body found in the request');
      const newUser = await userService.create(data);
      console.log({ newUser });
      return res.status(201).json(newUser);
    } catch (error) {
      return reportError(error, res);
    }
    
  }
  async getAllUsers(req: express.Request, res: express.Response) {
    try {
      const allUsers = await userService.getAllUsers();
      return res.status(200).json(allUsers);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async loginUser(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if(!data) throw new ErrorResponse(400, 'Body not found in the request');
      const { email, password } = data;
      if(!email) throw new ErrorResponse(400, 'No email found in the request');
      if(!password) throw new ErrorResponse(400, 'No password found in the request');
      const userLogin = await userService.login(email, password);
      return res.status(200).json(userLogin);
    } catch (error) {
      return reportError(error, res);
    }
  }
}

const userController = new UserController();
export default userController;