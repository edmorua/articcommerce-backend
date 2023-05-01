import { AttributeI } from './attributes.interface';
import { ProductI } from './product.interface';

export interface ProductAttributeI {
	id?: number;
	productId: number;
	attributeId: number;
	product: ProductI;
  attribute: AttributeI;
}
