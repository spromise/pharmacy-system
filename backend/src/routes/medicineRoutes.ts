// pharmacy-system/backend/src/routes/medicineRoutes.ts
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// 获取药品列表
router.get('/medicines', async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10, keyword = '' } = req.query;

    const where = keyword
      ? { name: { contains: keyword as string } }
      : {};

    const total = await prisma.medicine.count({ where });
    const data = await prisma.medicine.findMany({
      where,
      skip: (Number(page) - 1) * Number(pageSize),
      take: Number(pageSize),
    });

    res.json({
      code: 200,
      message: '获取药品列表成功',
      data,
      total,
    });
  } catch (error: any) {
    console.error('Error fetching medicines:', error);
    res.status(500).json({
      code: 500,
      message: '获取药品列表失败',
      error: error.message || '未知错误',
    });
  }
});

// 创建药品
router.post('/medicines', async (req: Request, res: Response) => {
  try {
    const { name, price, stock } = req.body;
    const medicine = await prisma.medicine.create({
      data: {
        name,
        price,
        stock,
      },
    });
    res.json({
      code: 200,
      message: '创建药品成功',
      data: medicine,
    });
  } catch (error: any) {
    console.error('Error creating medicine:', error);
    res.status(500).json({
      code: 500,
      message: '创建药品失败',
      error: error.message || '未知错误',
    });
  }
});

// 更新药品信息
router.put('/medicines/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    const medicine = await prisma.medicine.update({
      where: { id: Number(id) },
      data: {
        name,
        price,
        stock,
      },
    });
    res.json({
      code: 200,
      message: '更新药品信息成功',
      data: medicine,
    });
  } catch (error: any) {
    console.error('Error updating medicine:', error);
    res.status(500).json({
      code: 500,
      message: '更新药品信息失败',
      error: error.message || '未知错误',
    });
  }
});

// 删除药品
router.delete('/medicines/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.medicine.delete({
      where: { id: Number(id) },
    });
    res.json({
      code: 200,
      message: '删除药品成功',
    });
  } catch (error: any) {
    console.error('Error deleting medicine:', error);
    res.status(500).json({
      code: 500,
      message: '删除药品失败',
      error: error.message || '未知错误',
    });
  }
});

// 获取库存信息
router.get('/inventory', async (req: Request, res: Response) => {
  try {
    const inventories = await prisma.medicine.findMany({
      select: {
        id: true,
        name: true,
        stock: true,
      },
    });
    res.json({
      code: 200,
      message: '获取库存信息成功',
      data: inventories,
    });
  } catch (error: any) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({
      code: 500,
      message: '获取库存信息失败',
      error: error.message || '未知错误',
    });
  }
});

// 进行库存盘点
router.post('/inventory/check', async (req: Request, res: Response) => {
  try {
    const { medicineId, checkedStock } = req.body;
    const inventoryCheck = await prisma.inventoryCheck.create({
      data: {
        medicineId,
        checkedStock,
      },
    });
    res.json({
      code: 200,
      message: '库存盘点成功',
      data: inventoryCheck,
    });
  } catch (error: any) {
    console.error('Error checking inventory:', error);
    res.status(500).json({
      code: 500,
      message: '库存盘点失败',
      error: error.message || '未知错误',
    });
  }
});

// 调整库存数量
router.put('/inventory/adjust/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const medicine = await prisma.medicine.update({
      where: { id: Number(id) },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });
    res.json({
      code: 200,
      message: '调整库存数量成功',
      data: medicine,
    });
  } catch (error: any) {
    console.error('Error adjusting inventory:', error);
    res.status(500).json({
      code: 500,
      message: '调整库存数量失败',
      error: error.message || '未知错误',
    });
  }
});

// 记录药品入库
router.post('/inbound', async (req: Request, res: Response) => {
  try {
    const { medicineId, quantity } = req.body;
    const inboundRecord = await prisma.inboundRecord.create({
      data: {
        medicineId,
        quantity,
      },
    });
    await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });
    res.json({
      code: 200,
      message: '药品入库成功',
      data: inboundRecord,
    });
  } catch (error: any) {
    console.error('Error recording inbound:', error);
    res.status(500).json({
      code: 500,
      message: '药品入库失败',
      error: error.message || '未知错误',
    });
  }
});

// 记录药品出库
router.post('/outbound', async (req: Request, res: Response) => {
  try {
    const { medicineId, quantity } = req.body;
    const outboundRecord = await prisma.outboundRecord.create({
      data: {
        medicineId,
        quantity,
      },
    });
    await prisma.medicine.update({
      where: { id: medicineId },
      data: {
        stock: {
          decrement: quantity,
        },
      },
    });
    res.json({
      code: 200,
      message: '药品出库成功',
      data: outboundRecord,
    });
  } catch (error: any) {
    console.error('Error recording outbound:', error);
    res.status(500).json({
      code: 500,
      message: '药品出库失败',
      error: error.message || '未知错误',
    });
  }
});

export default router;