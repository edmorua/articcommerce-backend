import express from 'express';
import { ErrorResponse, reportError } from '../utils/Error';
import clientService from '../services/client.service';
import { CODES_RESPONSE } from '../utils/constants/response.code';

class ClientController {
  async getClientById(req: express.Request, res: express.Response) {
    const data = req.params;
    console.log({ req });
    console.log({ data });
    const { id } = data;
    try {
      if (!id) throw new ErrorResponse(CODES_RESPONSE.BAD_REQUEST, 'No id found in the request');
      const user = await clientService.getClientById(Number(id));
      return res.status(CODES_RESPONSE.SUCCESS).json(user);
    } catch (error) {
      return reportError(error, res);
    }

  }

  async createClient(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(
        CODES_RESPONSE.BAD_REQUEST,
        'No body found in the request');
      const newUser = await clientService.create(data);
      console.log({ newUser });
      return res.status(CODES_RESPONSE.CREATED).json(newUser);
    } catch (error) {
      return reportError(error, res);
    }

  }

  async getAllClients(req: express.Request, res: express.Response) {
    try {
      const allUsers = await clientService.getAllClients();
      return res.status(CODES_RESPONSE.SUCCESS).json(allUsers);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async loginClient(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if(!data) throw new ErrorResponse(
        CODES_RESPONSE.BAD_REQUEST,
        'Body not found in the request');
      const { email, password } = data;
      if(!email) throw new ErrorResponse(
        CODES_RESPONSE.BAD_REQUEST,
        'No email found in the request');
      if(!password) throw new ErrorResponse(
        CODES_RESPONSE.BAD_REQUEST,
        'No password found in the request');
      const userLogin = await clientService.login(email, password);
      return res.status(CODES_RESPONSE.SUCCESS).json(userLogin);
    } catch (error) {
      return reportError(error, res);
    }
  }
}

const clientController = new ClientController();
export default clientController;
