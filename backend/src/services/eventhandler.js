import axios from 'axios';
import logger from '../helpers/logging.helper';

export async function sendEvent(namespace, topic, message, ownerKey) {
  const config = {
    baseUrl: process.env.EVENTHANDLER_BASEURL,
    apiKey: process.env.EVENTHANDLER_APIKEY,
    debug: true,
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
    if (error.response) {
      logger.error(error.response.data);
      logger.error(error.response.status);
      logger.error(error.response.headers);
    } else if (error.request) {
      logger.error(error.request);
    }
    throw error;
  }
}
