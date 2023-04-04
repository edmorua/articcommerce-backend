import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: true,
  port: Number(process.env.DB_PORT) || 5432,
  host: process.env.DB_HOST || "db",
  models: [__dirname + '/models/**.model.ts'],
  sync: { force: true }
});
console.log({ __dirname });
export default sequelize;