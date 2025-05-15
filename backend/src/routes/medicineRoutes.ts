// src/routes/medicineRoutes.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// 创建药品
router.post('/', async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const medicine = await prisma.medicine.create({
      data: {
        name,
        price,
        stock,
      },
    });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;