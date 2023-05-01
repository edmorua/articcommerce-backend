import { CategoryI } from './category.interface';
import { ProductI } from './product.interface';

export interface AttributeI {
	id?: number;
	name: string;
	dataType: string;
	valueString: string | undefined;
	valueInteger: number | undefined;
	valueFloat: number | undefined;
	valueDate: Date | undefined;
	products?: ProductI[];
	categoryId: number;
	category: CategoryI;
}
