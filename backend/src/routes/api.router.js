import { Router } from 'express';
import Errors from '../errors';

import example from './example.router';
import status from './status.router';
import eventhandler from './eventhandler.router';

const apiRouter = new Router();

apiRouter.use('/examples', example);
apiRouter.use('/status', status);
apiRouter.use('/events', eventhandler);


apiRouter.get('*', (req, res, next) => {
  next(Errors.notFound({ message: 'This route doesn\'t exist on the api' }));
});

export default apiRouter;
