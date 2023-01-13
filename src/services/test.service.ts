import { Test } from "../models/test.model";


class TestService {
  async create(test: Test): Promise<Test> {
    console.log({ test });
    const newTest: Test = await Test.create({ name: test.name, size: test.size, color: test.color, date: new Date() });
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
}

export default new TestService();