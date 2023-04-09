import { Table, Model, Column, DataType } from 'sequelize-typescript';

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
}

export default Category;