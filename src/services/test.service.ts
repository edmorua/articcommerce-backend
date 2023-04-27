import Test  from "../models/test.model";


class TestService {
  async create(test: Test): Promise<Test> {
    console.log({ test });
    const newTest: Test = await Test.create({ ...test, date: new Date() });
    return newTest;
  }

  async getTestById(id: number): Promise<Test | undefined | null>{
    const test = await Test.findByPk(id);
    return test;
  }
  async getAllTest(): Promise<Test[]>{
    const allTest = await Test.findAll();
    return allTest;
  }

  async fillDevDB(): Promise<Boolean>{
    try {
      
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default new TestService();