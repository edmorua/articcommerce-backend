import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Client from '../models/client.model';
import Address from '../models/address.model';
import { ClientI } from '../interfaces/client.interface';
import { CODES_RESPONSE } from '../utils/constants/respoonse.code';
import envVars from '../envVars';

type LoginUser = {
  clientId: number;
  email: string;
  name: string;
  role: string;
  token: string;
}
class ClientService {
  async create(client: ClientI): Promise<LoginUser> {
    try {
      const clientToSave = { ...client };
      clientToSave.password = await bcrypt.hash(clientToSave.password, envVars.SALT_ROUND);
      const newUser: Client = (await Client.create({ ...clientToSave }));
      const privateKey = process.env.SECRET_KEY || '';
      const { email, role, name } = newUser.toJSON();
      const token = jwt.sign({ id: newUser.id }, privateKey);
      return {
        clientId: newUser.id,
        email,
        name,
        role,
        token
      };
    } catch (error: any) {
      console.error({ error });
      throw { status: error?.status || CODES_RESPONSE.INTERNAL_ERROR, message: error?.message };
    }
  }

  async getClientById(id: number): Promise<Client | null> {
    try {
      const user = await Client.findByPk(id, { include: Address });
      return user;
    } catch (error: any) {
      console.error({ error });
      throw { status: error?.status, message: error?.message };
    }
  }

  async getAllClients(): Promise<Client[]> {
    try {
      const users = await Client.findAll();
      return users;
    } catch (error: any) {
      console.error({ error });
      throw { status: error?.status, message: error?.message };
    }
  }

  async login(email: string, password: string): Promise<LoginUser | null> {
    try {
      const user = await Client.findOne({ where: { email: email } });
      if (!user) {
        throw { status: CODES_RESPONSE.NOT_FOUND, message: 'User not found' };
      }
      const { role, name, password: hashedPassowrd } = user.toJSON();
      const isPasswordValid = await bcrypt.compare(password, hashedPassowrd);
      if(!isPasswordValid) {
        throw { status: CODES_RESPONSE.BAD_REQUEST, message: 'Invalid password' };
      }
      const privateKey = process.env.SECRET_KEY || '';

      const token = jwt.sign({ clientId: user.id, userRole: role }, privateKey);
      return {
        clientId: user.id,
        email: email,
        name: name,
        role: role,
        token: token
      };
    } catch (error: any) {
      console.error({ error });
      throw { status: error?.status, message: error?.message };
    }
  }
}
const clientService = new ClientService();
export default clientService;
