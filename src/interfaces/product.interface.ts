import { ProductAttributeI } from './product-attribute.interface';
import { ProductCategoryI } from './product-category.interface';

export interface ProductI{
  name: string;
  sku: string;
  code: string;
  price: number;
  imageURLs?: string[];
  attributes: ProductAttributeI[];
  parentCategoryId: number;
  categories: ProductCategoryI[];
}
