import express from 'express';
import productService from '../services/product.service';
import { ErrorResponse, reportError } from '../utils/Error';

class ProductController{
  async createProduct(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(400, 'No body found in the request');
      const product = await productService.create(data);
      return res.status(201).json(product);
    } catch (error) {
      return reportError(error, res);
    }
  }
  async getProductById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    try {
      if (!id) throw new ErrorResponse(400, 'No id found in the request');
      const product = await productService.getProductById(Number(id));
      return res.status(200).json(product);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getAllProducts(req: express.Request, res: express.Response) {
    try {
      const products = await productService.getAllProducts();
      return res.status(200).json(products);
    } catch (error) {
      return reportError(error, res);
    }
  }
}
const productController = new ProductController();
export default productController;
