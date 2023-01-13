import { Sequelize } from 'sequelize-typescript';
import { Test } from '../models/test.model';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
  port: Number(process.env.DB_PORT) || 5432,
  host: process.env.DB_HOST || "db",
  models: [Test],
})

export default sequelize;