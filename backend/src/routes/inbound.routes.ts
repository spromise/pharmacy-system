import express from 'express';
import { getInboundRecords, createInboundRecord } from '../controllers/inbound.controller.ts';

const router = express.Router();

router.get('/', getInboundRecords);
router.post('/', createInboundRecord);

export default router;