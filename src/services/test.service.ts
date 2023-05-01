import Test  from '../models/test.model';
import { products } from '../mock_data/product';
import { Customers } from '../mock_data/clients';
import { parentCategories,
  proteinSubCategories,
  suplementesSubCategories,
  vitaminisSubCategories } from '../mock_data/categories';
import { attributes } from '../mock_data/attributes';


class TestService {
  async create(test: Test): Promise<Test> {
    console.log({ test });
    const newTest: Test = await Test.create({ ...test, date: new Date() });
    return newTest;
  }

  async getTestById(id: number): Promise<Test | undefined | null> {
    const test = await Test.findByPk(id);
    return test;
  }

  async getAllTest(): Promise<Test[]> {
    const allTest = await Test.findAll();
    return allTest;
  }

  async fillDevDB(): Promise<boolean> {
    try {

      return await true;
    } catch (error) {
      throw error;
    }
  }
}

export default new TestService();
