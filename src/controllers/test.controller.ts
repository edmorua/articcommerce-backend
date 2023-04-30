import express from 'express';
import Test  from '../models/test.model';
import testService from '../services/test.service';
import { reportError } from '../utils/Error';
import { CODES_RESPONSE } from '../utils/constants/respoonse.code';

class TestController {
  async getTestById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    if (!id) throw new Error('no id found in the request');
    const test = await testService.getTestById(Number(id));
    if (test) return res.status(CODES_RESPONSE.SUCCESS).json(test);
    return res.status(CODES_RESPONSE.NOT_FOUND).json({ error: 'not found' });
  }

  async createTest(req: express.Request, res: express.Response) {
    const data = req.body;
    if (!data) throw new Error('no body found in the request');
    const { test } = data;
    if (!test) throw new Error('no test found in the body');
    const newTest = await testService.create(test as Test);
    return res.status(CODES_RESPONSE.SUCCESS).json({ newTest });
  }

  async getAll(res: express.Response) {
    const allTest = await testService.getAllTest();
    return res.status(CODES_RESPONSE.SUCCESS).json(allTest);
  }

  async fillDevDB(req: express.Request, res: express.Response) {
    try {
      const response = await testService.fillDevDB();
      return res.status(CODES_RESPONSE.SUCCESS).json(response);
    } catch (error) {
      return reportError(error, res);
    }
  }
}
const testController = new TestController();
export default testController;
