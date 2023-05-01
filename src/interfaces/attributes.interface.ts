import { CategoryI } from './category.interface';
import { ProductI } from './product.interface';

export interface AttributeI {
	id?: number;
	name: string;
	code: string;
	description?: string;
	dataType: string;
	products?: ProductI[];
	categoryId?: number;
	category?: CategoryI;
}
