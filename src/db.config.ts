import { Sequelize } from 'sequelize-typescript';
import envVars from './envVars';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: envVars.DB_USER,
  password: envVars.DB_PASSWORD,
  logging: true,
  port: envVars.DB_PORT,
  host: envVars.DB_HOST,
  models: [__dirname + '/models/**.model.ts'],
  sync: { force: true }
});
export default sequelize;
