import express from 'express';
import { getStatus, getVersion } from '../controllers/status';

const router = new express.Router();

router.get('/', getStatus);
router.get('/version', getVersion);

export default router;
