import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import Address from '../models/address.model';
import { UserI } from '../interfaces/user.interface';

type LoginUser = {
  userId: number;
  email: string;
  name: string;
  role: string;
  token: string;
}
class UserService {
  async create(user: UserI): Promise<LoginUser> {
    try {
      const userToSave = { ...user };
      userToSave.password = await bcrypt.hash(userToSave.password, 10);
      const newUser: User = (await User.create({ ...userToSave }));
      const privateKey = process.env.SECRET_KEY || '';
      const { email, role, name } = newUser.toJSON(); 
      const token = jwt.sign({ id: newUser.id }, privateKey);
      return {
        userId: newUser.id,
        email,
        name,
        role,
        token
      }
    } catch (error: any) {
      console.error({ error });
      throw { status : error?.status || 500, message: error?.message};
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const user = await User.findByPk(id, { include: Address });
      return user;
    } catch (error: any) {
      console.error({ error });
      throw { status: error?.status, message: error?.message };
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error: any) {
      console.error({ error });
      throw { status: error?.status, message: error?.message };
    }
  }
  async login(email: string, password: string): Promise<LoginUser | null> {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw { status: 404, message: 'User not found' };
      }
      const { role, name, password: hashedPassowrd } = user.toJSON();
      const isPasswordValid = await bcrypt.compare(password, hashedPassowrd);
      if(!isPasswordValid) {
        throw { status: 401, message: 'Invalid password' };
      }
      const privateKey = process.env.SECRET_KEY || '';

      const token = jwt.sign({ userId: user.id, userRole: role }, privateKey);
      return {
        userId: user.id, 
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
const userService = new UserService();
export default userService;
