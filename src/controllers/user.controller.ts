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
      return res.status(201).json(newUser);
    } catch (error) {
      reportError(error, res);
    }
    
  }
  async getAllUsers(req: express.Request, res: express.Response) {
    try {
      const allUsers = await userService.getAllUsers();
      return res.status(200).json(allUsers);
    } catch (error) {
      reportError(error, res);
    }
  }
}

const userController = new UserController();
export default userController;