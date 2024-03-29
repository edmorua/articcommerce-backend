
import { Table, Column, DataType, HasMany, Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import Address from './address.model';
import { ClientI } from '../interfaces/client.interface';

const minLenghtPassword = 8;
const maxLenghtPassword = 99;

type UserAttributes = Optional<ClientI, 'id'>
@Table({
  timestamps: true,
  tableName: 'client',
})
export default class Client extends Model<ClientI,UserAttributes> {
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
       isEmail: true || { msg: 'Invalid Email' }
    }
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [minLenghtPassword,maxLenghtPassword],
    }
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [['ADMIN', 'CUSTOMER']],
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
