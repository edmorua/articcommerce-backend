import express from 'express';
import Test  from '../models/test.model';
import testService from '../services/test.service';

class TestController {
  async getTestById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    console.log('testito');
    if (!id) throw new Error('no id found in the request');
    const test = await testService.getTestById(Number(id));
    if (test) return res.status(200).json(test);
    return res.status(404).json({ error: 'not found' });
  }

  async createTest(req: express.Request, res: express.Response) {
    const data = req.body;
    if (!data) throw new Error('no body found in the request');
    const { test } = data;
    if (!test) throw new Error('no test found in the body');
    const newTest = await testService.create(test as Test);
    return res.status(201).json({ newTest });
  }
  
  async getAll(res: express.Response) {
    const allTest = await testService.getAllTest();
    return res.status(200).json(allTest);
  }
}
const testController = new TestController();
export default testController;