import { Router } from 'express';
import {
  handleEvent,
} from '../controllers/events';

const router = new Router();

// TODO: Rename "my-event" to a term describing the event you want to handle
router.post('/my-event', handleEvent);

export default router;
