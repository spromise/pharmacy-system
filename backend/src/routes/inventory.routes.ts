import express from 'express';
import { getInventoryList, createInventoryRecord } from '../controllers/inventory.controller.ts';

const router = express.Router();

router.get('/', getInventoryList);
router.post('/', createInventoryRecord);

export default router;