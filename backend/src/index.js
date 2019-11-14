import app from './app';
import logger from './helpers/logging.helper';

app.start((err) => {
  if (err) {
    logger.error(`Error=${err}`);
  }
  logger.info('app bootstrap finished');
});
