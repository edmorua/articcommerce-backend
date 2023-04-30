import { Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo } from 'sequelize-typescript';
import Product from './product.model';
import ProductAttribute from './product-attribute.model';
import Category from './category.model';

@Table({
  tableName: 'attribute',
  timestamps: true
})
class Attribute extends Model<Attribute> {

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  dataType!: string;

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

  @BelongsToMany(() => Product, () => ProductAttribute)
  products!: Product[];

  @ForeignKey(() => Category)
  categoryId!: number;

  @BelongsTo(() => Category)
  category!: Category;
}

export default Attribute;
