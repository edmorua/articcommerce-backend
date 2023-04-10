import { Table, Model, Column, DataType, BelongsToMany, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
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

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  parentCategoryId?: number;

  @BelongsTo(() => Category, 'parentCategoryId')
  parentCategory?: Category;

  @HasMany(() => Category, 'parentCategoryId')
  childCategories?: Category[];

  @BelongsToMany(() => Product, () => ProductCategory)
  products?: Array<Product & { ProductCategory: ProductCategory }>
}

export default Category;