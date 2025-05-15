// src/routes/reportRoutes.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// 获取所有药品库存信息报表
router.get('/inventory', async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany();
    const report = medicines.map(medicine => ({
      name: medicine.name,
      stock: medicine.stock,
      totalValue: medicine.stock * medicine.price,
    }));
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;