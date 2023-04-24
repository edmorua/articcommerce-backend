import User from "../models/user.model";
import { AddressI } from "../interfaces/address.interface";
import Address from "../models/address.model";
import { ErrorResponse } from "../utils/Error";

class AddressService {
  async create(address: AddressI, userId: number ): Promise<Address> {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new ErrorResponse(400, `User is not found with user id  ${userId}`);
      }
      await user.$create('address', { ...address });
      const listAddress: Address[] = await user.$get('address') as Address[];
      const newAddress = listAddress.pop();
      if (!newAddress) {
        throw new ErrorResponse(500, 'Address was not able to save into the database');
      }
      return newAddress;
    } catch (error) {
      throw error;
    }
  }

  async getAddressById(id: number): Promise<Address | null> {
    try {
      const address = await Address.findByPk(id);
      return address
    } catch (error) {
      throw error;
    }
  }
}
const addressService = new AddressService();
export default addressService;