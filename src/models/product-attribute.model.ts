import { Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Product from './product.model';
import Attribute from './attribute.model';

@Table({
	tableName: 'product_attribute',
	timestamps: true,
})
class ProductAttribute extends Model {
  @ForeignKey(() => Product)
  	productId!: number;

  @ForeignKey(() => Attribute)
  	attributeId!: number;

  @BelongsTo(() => Product)
  	product!: Product;

  @BelongsTo(() => Attribute)
  	attribute!: Attribute;

}

export default ProductAttribute;
