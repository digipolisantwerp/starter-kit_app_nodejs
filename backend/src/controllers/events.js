import { sendEvent } from '../services/eventhandler';
import logger from '../helpers/logging.helper';


export async function postEvent(req, res, next) {
  try {
    await sendEvent('namespace', 'topic', req.body, 'ownerKey');
    return res.json({ status: 'ok' });
  } catch (e) {
    return next(e);
  }
}

export async function recieveEvent(req, res, next) {
  try {
    logger.info('recieved event', req.body);
    return res.json({ status: 'ok' });
  } catch (e) {
    return next(e);
  }
}
