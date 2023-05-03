import { CategoryI } from './category.interface';
import { ProductAttributeI } from './product-attribute.interface';
import { ProductI } from './product.interface';

export interface AttributeI {
	id?: number;
	name: string;
	code: string;
	description?: string;
	dataType: string;
	value?: ProductAttributeI;
	products?: ProductI[];
	categoryId?: number;
	category?: CategoryI;
}
