import axios from 'axios';
import logger from '../helpers/logging.helper';

export async function sendEvent(namespace, topic, message, ownerKey) {
  const config = {
    baseUrl: process.env.EVENTHANDLER_BASEURL,
    apiKey: process.env.EVENTHANDLER_APIKEY,
  };
  try {
    await axios.post(
      `${config.baseUrl}/namespaces/${namespace}/topics/${topic}/publish`,
      message,
      {
        headers: {
          'owner-key': ownerKey,
          apikey: config.apiKey,
        },
      },
    );
  } catch (error) {
    logger.error('EventHandler publish failed');
    if (error.response) {
      logger.error(JSON.stringify(error.response.data));
      logger.error(error.response.status);
      logger.error(JSON.stringify(error.response.headers));
    } else if (error.request) {
      logger.error(JSON.stringify(error.request));
    }
    throw error;
  }
}
