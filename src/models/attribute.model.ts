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
    allowNull: true
  })
  code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  description?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [['string', 'integer', 'float', 'date']]
    }
  })
  dataType!: string;

  @BelongsToMany(() => Product, () => ProductAttribute)
  products!: Product[];

  @ForeignKey(() => Category)
  categoryId!: number;

  @BelongsTo(() => Category)
  category!: Category;
}

export default Attribute;
