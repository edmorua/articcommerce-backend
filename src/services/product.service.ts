import Product from "../models/product.model";
import { ProductI } from "../interfaces/product.interface";

class ProductService {
  async create(product: ProductI): Promise<Product> {
    try {
      const newProduct: Product = await Product.create({ ...product });
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product | null> {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
      throw error;
    }
  }
  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
}
const productService = new ProductService();
export default productService;