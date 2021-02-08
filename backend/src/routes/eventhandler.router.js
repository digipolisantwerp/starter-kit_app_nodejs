import { Router } from 'express';
import {
  postEvent,
  recieveEvent,
} from '../controllers/events';

const router = new Router();

router.post('/', postEvent);
router.post('/recieveEvent', recieveEvent);

export default router;
