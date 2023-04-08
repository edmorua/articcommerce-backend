
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import Address from "./address.model";

@Table({
  timestamps: true,
  tableName: "User",
})
export default class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ProfileURL: string | undefined;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
       isEmail: true || { msg: 'Invalid Email'}
    }
  })
  Email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [8,99],
    }
  })
  Password!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    }
  })
  Date!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [['AMDIN, CLIENT']],
    },
  })
  Role!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  BirthDay!: Date;

  @HasMany(() => Address)
  addresses!: Address[];
}