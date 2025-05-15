// src/routes/inboundRoutes.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// 药品入库
router.post('/', async (req, res) => {
  try {
    const { medicineId, quantity } = req.body;
    const inboundRecord = await prisma.inboundRecord.create({
      data: {
        medicineId,
        quantity,
      },
    });
    // 更新药品库存
    await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });
    res.json(inboundRecord);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;