import express from 'express';
import addressService from '../services/address.service';
import { ErrorResponse, reportError } from '../utils/Error';

class AddressController {
  async createAddress(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(400, 'No body found in the request');
      const { address, userId } = data;
      const newAddress = await addressService.create(address, userId);
      return res.status(201).json(newAddress);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getAddressById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    try {
      if (!id) throw new ErrorResponse(400, 'No id found in the request');
      const address = await addressService.getAddressById(Number(id));
      return res.status(200).json(address);
    } catch (error) {
      return reportError(error, res);
    }
  }
}

const addressController = new AddressController();
export default addressController;
