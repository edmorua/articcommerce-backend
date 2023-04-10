import express from 'express';
import categoryService from '../services/category.service';
import { ErrorResponse, reportError } from '../utils/Error';

class CategoryController {
  async createCategory(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(400, 'No body found in the request');
      const category = await categoryService.create(data);
      return res.status(201).json(category);
    } catch (error) {
      return reportError(error, res);
    }
  }
  async getCategoryById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    try {
      const category = await categoryService.getCategoryById(Number(id));
      return res.status(200).json(category);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getSubcategories(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    try {
      const subCategories = await categoryService.getAllSubCategoriesFromParent(Number(id));
      return res.status(200).json(subCategories);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getAllCategories(req: express.Request, res: express.Response) {
    try {
      const categories = await categoryService.getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      throw error;
    }
  }
}

const categoryController = new CategoryController();
export default categoryController;