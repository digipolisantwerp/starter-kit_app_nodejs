import logger from '../src/helpers/logging.helper';

// silence logs during tests
logger.transports[0].silent = true;
