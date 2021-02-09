import { Router } from 'express';
import {
  postEvent,
  recieveEvent,
} from '../controllers/events';

const router = new Router();

router.post('/', postEvent);
// TODO: Rename "my-event" to a term describing the event you want to handle
router.post('/my-event', handleEvent);

export default router;
