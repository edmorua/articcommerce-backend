import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import Category from "./category.model";
import Product from "./product.model";

@Table({
  timestamps: true,
  tableName: 'ProductCategory',
})
class ProductCategory extends Model {
  @ForeignKey(() => Category)
  categoryId!: number;

  @ForeignKey(() => Product)
  productId!: number;
  
  @BelongsTo(() => Product, 'productId')
  product?: Product;

  @BelongsTo(() => Category, 'categoryId')
  category?: Category;
}

export default ProductCategory;