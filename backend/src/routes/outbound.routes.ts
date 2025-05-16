import express from 'express';
import { getOutboundRecords, createOutboundRecord } from '../controllers/outbound.controller.ts';

const router = express.Router();

router.get('/', getOutboundRecords);
router.post('/', createOutboundRecord);

export default router;