import { Table, Column, DataType, Model, ForeignKey } from "sequelize-typescript";
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
}

export default ProductCategory;