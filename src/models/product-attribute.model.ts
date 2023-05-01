import { Table, Model, ForeignKey, BelongsTo, Column, DataType } from 'sequelize-typescript';
import Product from './product.model';
import Attribute from './attribute.model';

@Table({
	tableName: 'product_attribute',
	timestamps: true,
})
class ProductAttribute extends Model {
	@Column({
    type: DataType.STRING,
    allowNull: true
  })
  valueString: string | undefined;

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  valueInteger: number | undefined;

  @Column({
    type: DataType.FLOAT,
    allowNull: true
  })
  valueFloat: number | undefined;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  valueDate: Date | undefined;

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
