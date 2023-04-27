
import { Table, Column, DataType, HasMany, Model } from "sequelize-typescript";
import { Optional } from "sequelize";
import Address from "./address.model";
import { UserI } from "../interfaces/user.interface";

interface UserAttributes extends Optional<UserI, 'id'> {}
@Table({
  timestamps: true,
  tableName: "User",
})
export default class User extends Model<UserI,UserAttributes> {
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