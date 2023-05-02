import Product from '../models/product.model';
import { ProductI } from '../interfaces/product.interface';
import Attribute from '../models/attribute.model';
import Category from '../models/category.model';

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
      const products = await Product
        .findAll({
          include: [{
            model: Attribute,
            as: 'attributes'
          }, {
            model: Category,
            as: 'parentCategory',
            foreignKey: 'parentCategoryId',
          }, {
            model: Category,
            as: 'subCategories',
          }]
        });
      return products;
    } catch (error) {
      throw error;
    }
  }
}
const productService = new ProductService();
export default productService;
