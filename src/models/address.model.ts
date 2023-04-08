import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user.model';

@Table({
  timestamps: true,
  tableName: "Address",
})
class Address extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ZipCode!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  neighborhood!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  additionalData!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  interiorCode: string | undefined;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  exteriorCode!: string;

  @ForeignKey(() => User)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}

export default Address;