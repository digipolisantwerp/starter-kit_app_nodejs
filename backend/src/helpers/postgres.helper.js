import { Sequelize, DataTypes } from 'sequelize';
import logger from './logging.helper';

const sequelize = new Sequelize(process.env.POSTGRES_CONNECTIONSTRING);

function initializeDatabase() {
  return sequelize
    .authenticate()
    .then(() => {
      logger.info('Connection has been established successfully.');
    })
    .catch((err) => {
      logger.error('Unable to connect to the database:', err);
      throw (err);
    });
}

export function closeDatabaseConnection() {
}

export default initializeDatabase;

export { sequelize, DataTypes };
