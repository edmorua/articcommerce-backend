import { Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo } from 'sequelize-typescript';
import Category from './category.model';
import ProductCategory from './product-category.model';
import Attribute from './attribute.model';
import ProductAttribute from './product-attribute.model';

@Table({
  timestamps: true,
  tableName: 'product',
})
export default class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sku!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  quantity!: number;

  @ForeignKey(() => Category)
  mainCategoryId!: number;

  @BelongsTo(() => Category, 'mainCategoryId')
  mainCategory?: Category;

  @BelongsToMany(() => Category, () => ProductCategory)
  subCategories?: Category[];

  @BelongsToMany(() => Attribute, () => ProductAttribute)
  attributes!: Attribute[];
}
