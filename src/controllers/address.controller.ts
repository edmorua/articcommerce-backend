import express from 'express';
import addressService from '../services/address.service';
import { ErrorResponse, reportError } from '../utils/Error';
import { CODES_RESPONSE } from '../utils/constants/response.code';

class AddressController {
  async createAddress(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(
        CODES_RESPONSE.BAD_REQUEST,
        'No body found in the request');
      const { address, clientId } = data;
      const newAddress = await addressService.create(address, clientId);
      return res.status(CODES_RESPONSE.CREATED).json(newAddress);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getAddressById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    try {
      if (!id) throw new ErrorResponse(CODES_RESPONSE.BAD_REQUEST, 'No id found in the request');
      const address = await addressService.getAddressById(Number(id));
      return res.status(CODES_RESPONSE.SUCCESS).json(address);
    } catch (error) {
      return reportError(error, res);
    }
  }
}

const addressController = new AddressController();
export default addressController;
