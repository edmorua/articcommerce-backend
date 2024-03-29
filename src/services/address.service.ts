import User from '../models/client.model';
import { AddressI } from '../interfaces/address.interface';
import Address from '../models/address.model';
import { ErrorResponse } from '../utils/Error';
import { CODES_RESPONSE } from '../utils/constants/response.code';

class AddressService {
  async create(address: AddressI, clientId: number ): Promise<Address> {
    try {
      const user = await User.findByPk(clientId);
      if (!user) {
        throw new ErrorResponse(
          CODES_RESPONSE.NOT_FOUND,
          `Client is not found with client id  ${clientId}`);
      }
      await user.$create('address', { ...address });
      const listAddress: Address[] = await user.$get('address') as Address[];
      const newAddress = listAddress.pop();
      if (!newAddress) {
        throw new ErrorResponse(
          CODES_RESPONSE.INTERNAL_ERROR,
          'Address was not able to save into the database');
      }
      return newAddress;
    } catch (error) {
      throw error;
    }
  }

  async getAddressById(id: number): Promise<Address | null> {
    try {
      const address = await Address.findByPk(id);
      return address;
    } catch (error) {
      throw error;
    }
  }
}
const addressService = new AddressService();
export default addressService;
