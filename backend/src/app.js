import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import responseHandler from '@digipolis/response';
import session from 'express-session';
import errorHandler from './middlewares/error.middleware';
import initializeDatabase, { closeDatabaseConnection } from './helpers/db.helper';
import logger from './helpers/logging.helper';
import routes from './routes';

let app;
let server;
const sessionConfig = {
  name: 'authsessionid',
  secret: '<set_your_secret_here>',
  resave: false,
  saveUninitialized: true,
};

function initializeExpress() {
  app = express();
  app.use(session(sessionConfig));
  app.use(helmet());
  app.use(bodyParser.json({ limit: '4096kb' }));
  app.use(responseHandler());
  app.use(routes);
  app.use((err, req, res, next) => {
    logger.error(err);
    return next(err);
  });
  app.enable('trust proxy');
  app.use(errorHandler);
}

function startListening() {
  return new Promise((resolve) => {
    server = app.listen(process.env.PORT, () => {
      logger.info(`Express server listening on port ${server.address().port}`);
      return resolve();
    });
  });
}

async function start() {
  try {
    initializeExpress();
    await initializeDatabase();
    await startListening();
    return app;
  } catch (err) {
    logger.error(`Error occured ${err}`);
    return process.exit(1);
  }
}

function stop() {
  closeDatabaseConnection();
  server.close();
}

export default {
  start,
  stop,
};

