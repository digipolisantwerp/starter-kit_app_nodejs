import { Sequelize, DataTypes } from 'sequelize';
import logger from './logging.helper';

const sequelize = new Sequelize(process.env.POSTGRES_CONNECTIONSTRING);

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (e) {
    logger.error('Unable to connect to the database:', e);
    throw (e);
  }
}

export function closeDatabaseConnection() {
}

export default initializeDatabase;

export { sequelize, DataTypes };
