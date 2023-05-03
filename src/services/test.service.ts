/* eslint-disable no-magic-numbers */
import Test  from '../models/test.model';
import Category from '../models/category.model';
import Attribute from '../models/attribute.model';
import ProductCategory from '../models/product-category.model';
import ProductAttribute from '../models/product-attribute.model';
import Client from '../models/client.model';
import Product from '../models/product.model';
import { products } from '../mock_data/product';
import { clients } from '../mock_data/clients';
import { parentCategories,
  proteinSubCategories,
  suplementesSubCategories,
  vitaminisSubCategories } from '../mock_data/categories';
import { attributes } from '../mock_data/attributes';
import { ProductI } from '../interfaces/product.interface';
import { ProductCategoryI } from '../interfaces/product-category.interface';
import { ProductAttributeI } from '../interfaces/product-attribute.interface';
import Logger from '../utils/logger';
import { CODES_RESPONSE } from '../utils/constants/response.code';


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

  /**
   * Service to fill the database with the mock data
   * @returns boolean - indicates whether the db has been filled sccessfully
   */
  async fillDevDB(): Promise<boolean> {
    try {
      const newParentCategories = parentCategories.map(category => {
        return {
          name: category.name,
          code: category.code,
        };
      });
      await Category.bulkCreate(newParentCategories);
      const newProteinSubCategories = proteinSubCategories.map(category => {
        return {
          name: category.name,
          code: category.code,
          parentCategoryId: category.parentCategoryId,
        };
      });
      await Category.bulkCreate(newProteinSubCategories);

      const newSuplementesSubCategories = suplementesSubCategories.map(category => {
        return {
          name: category.name,
          code: category.code,
          parentCategoryId: category.parentCategoryId,
        };
      });

      await Category.bulkCreate(newSuplementesSubCategories);
      const newVitaminisSubCategories = vitaminisSubCategories.map(category => {
        return {
          name: category.name,
          code: category.code,
          parentCategoryId: category.parentCategoryId,
        };
      });
      await Category.bulkCreate(newVitaminisSubCategories);
      const newProducts = products.map((product) => {
        return {
          name: product.name,
          code: product.code,
          sku: product.sku,
          price: product.price,
          quantity: product.quantity,
          imagesURLs: product.imageURLs,
          parentCategoryId: product.parentCategoryId,
        };
      });
      await Client.bulkCreate(clients as any);
      await Attribute.bulkCreate(attributes as any);
      const productsModelSaved = await Product.bulkCreate(newProducts);
      let productsSaved = productsModelSaved.map((product) => {
        return product.toJSON() as ProductI;
      });

      productsSaved = productsSaved.map((product, index) => {
        return {
          ...product,
          ...products[index]
        };
      });
      const productCategories: ProductCategoryI[] = [];
      productsSaved.forEach((product) => {
        product.categories.forEach((category) => {
          productCategories.push({
            productId: product.id,
            categoryId: category.categoryId,
          });
        });
      });
      await ProductCategory.bulkCreate(productCategories as any);
      const productAttributes: ProductAttributeI[] = [];
      productsSaved.forEach((product) => {
        product.attributes.forEach((attribute) => {
          productAttributes.push({
            productId: product.id,
            attributeId: attribute.attributeId,
            valueString: attribute.valueString,
            valueInteger: attribute.valueInteger,
            valueFloat: attribute.valueFloat,
            valueDate: attribute.valueDate,
          });
        });
      });
      await ProductAttribute.bulkCreate(productAttributes as any);
      const test = await Product.update({ imageURLs: products[0].imageURLs }, {
        where: { id: 1 },
      });
      Logger.debug({ test });
      Logger.debug('Finished updating');
      return await true;
    } catch (error: any) {
      Logger.error({ error });
      throw { status: error?.status || CODES_RESPONSE.INTERNAL_ERROR, message: error?.message };
    }
  }
}

export default new TestService();
