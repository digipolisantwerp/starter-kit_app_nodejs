import HttpStatus from 'http-status';
import uuid from 'uuid/v4';
import { pick } from 'lodash';

const form = errorDefault => customException =>
  Object.assign(
    {},
    errorDefault,
    { identifier: uuid() },
    pick(customException, ['identifier', 'code', 'url', 'meta', 'title', 'message']),
  );

const errors = {
  notFound: form({
    status: HttpStatus.NOT_FOUND,
    title: 'Not Found',
    message: 'The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
  }),
  unauthorized: form({
    status: HttpStatus.UNAUTHORIZED,
    title: 'Unauthorized',
    message: 'The request has not been applied because it lacks valid authentication credentials for the target resource.',
  }),
  badRequest: form({
    status: HttpStatus.BAD_REQUEST,
    title: 'Bad Request',
    message: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
  }),
  internalServerError: form({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    title: 'Internal Server Error',
    message: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
  }),
  unprocessableEntity: form({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    title: 'Unprocessable Entity',
    message: 'The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.',
  }),
};

module.exports = errors;
