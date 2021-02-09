import logger from '../helpers/logging.helper';

export async function handleEvent(req, res, next) {
  try {
    logger.info('handling event', req.body);
    // TODO: Handle event
    return res.json({ status: 'ok' });
  } catch (e) {
    return next(e);
  }
}
