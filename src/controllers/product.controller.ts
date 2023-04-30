import express from 'express';
import productService from '../services/product.service';
import { ErrorResponse, reportError } from '../utils/Error';
import { CODES_RESPONSE } from '../utils/constants/response.code';

class ProductController {
  async createProduct(req: express.Request, res: express.Response) {
    const data = req.body;
    try {
      if (!data) throw new ErrorResponse(
        CODES_RESPONSE.BAD_REQUEST,
        'No body found in the request');
      const product = await productService.create(data);
      return res.status(CODES_RESPONSE.CREATED).json(product);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getProductById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    try {
      if (!id) throw new ErrorResponse(CODES_RESPONSE.BAD_REQUEST, 'No id found in the request');
      const product = await productService.getProductById(Number(id));
      return res.status(CODES_RESPONSE.SUCCESS).json(product);
    } catch (error) {
      return reportError(error, res);
    }
  }

  async getAllProducts(req: express.Request, res: express.Response) {
    try {
      const products = await productService.getAllProducts();
      return res.status(CODES_RESPONSE.SUCCESS).json(products);
    } catch (error) {
      return reportError(error, res);
    }
  }
}
const productController = new ProductController();
export default productController;
