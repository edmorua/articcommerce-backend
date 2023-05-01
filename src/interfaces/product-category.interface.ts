import { CategoryI } from './category.interface';
import { ProductI } from './product.interface';

export interface ProductCategoryI {
	id?: number;
	categoryId: number;
	productId?: number;
	product?: ProductI;
	category?: CategoryI;
}
