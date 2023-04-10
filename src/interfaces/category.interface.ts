import ProductI from "./product.interface";

interface CategoryI {
  name: string;
  code: string;
  parentCategoryId?: number
  parentCategory?: CategoryI;
  childCategories?: CategoryI[];
  products?: ProductI[];
}

export default CategoryI;
