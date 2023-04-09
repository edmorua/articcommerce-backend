import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import Product from './product.model';
import ProductCategory from './product-category.model';

@Table({
  timestamps: true,
  tableName: 'Category',
})
class Category extends Model  {

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

  @BelongsToMany(() => Product, () => ProductCategory)
  products!: Array<Product & { ProductCategory: ProductCategory }>
}

export default Category;