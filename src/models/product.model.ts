import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import Category from './category.model';
import ProductCategory from './product-category.model';

@Table({
  timestamps: true,
  tableName: "Product",
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

  @BelongsToMany(() => Category, () => ProductCategory)
  categories!: Array<Category & { ProductCategory: ProductCategory}>
}