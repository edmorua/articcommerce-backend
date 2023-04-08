import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: "Address",
})
export default class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  State!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  City!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ZipCode!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Neighborhood!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  AdditionalData!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  InteriorCode: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ExteriorCode!: string;
}