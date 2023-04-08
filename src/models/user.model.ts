
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import Address from "./address.model";
import UserI from "../interfaces/user.interface";
import { Optional } from "sequelize";

interface UserAttributes extends Optional<UserI, 'id'> {}
@Table({
  timestamps: false,
  tableName: "User",
})
export default class User extends Model<UserAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  profileURL: string | undefined;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
       isEmail: true || { msg: 'Invalid Email'}
    }
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [8,99],
    }
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [['ADMIN', 'CLIENT']],
    },
  })
  role!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthDate!: Date;

  @HasMany(() => Address)
  address!: Address[];
}