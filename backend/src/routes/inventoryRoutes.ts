// src/routes/inventoryRoutes.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// 获取所有药品库存信息
router.get('/', async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;