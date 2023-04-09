import User from '../models/user.model';
import Address from '../models/address.model';
import UserI from '../interfaces/user.interface';

class UserService {
  async create(user: UserI): Promise<User> {
    try {
      const newUser: User = await User.create({ ...user });
      return newUser;
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
}
const userService = new UserService();
export default userService;
