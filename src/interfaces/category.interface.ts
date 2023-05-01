import { ProductI } from './product.interface';

export interface CategoryI {
  id?: number;
  name: string;
  code: string;
  parentCategoryId?: number
  parentCategory?: CategoryI;
  childCategories?: CategoryI[];
  products?: ProductI[];
}

