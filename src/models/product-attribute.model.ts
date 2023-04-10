import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import Product from './product.model';
import Attribute from './attribute.model';

@Table({
  tableName: 'ProductAttribute',
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