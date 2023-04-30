import { ProductI } from './product.interface';

export interface CategoryI {
  name: string;
  code: string;
  parentCategoryId?: number
  parentCategory?: CategoryI;
  childCategories?: CategoryI[];
  products?: ProductI[];
}

