import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: "Product",
})
export default class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  SKU!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  Price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  Quantity!: number;
}