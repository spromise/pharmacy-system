// 后端 src/routes/medicineRoutes.ts
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// 获取药品列表
router.get('/medicines', async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10, keyword = '' } = req.query;
    
    // 构建查询条件
    const where = keyword 
      ? { name: { contains: keyword as string } } 
      : {};
    
    // 查询总数
    const total = await prisma.medicine.count({ where });
    
    // 查询列表
    const data = await prisma.medicine.findMany({
      where,
      skip: (Number(page) - 1) * Number(pageSize),
      take: Number(pageSize)
    });
    
    // 返回统一格式
    res.json({
      code: 200,
      message: '获取药品列表成功',
      data,
      total
    });
  } catch (error: any) {
    console.error('Error fetching medicines:', error);
    
    // 返回错误信息
    res.status(500).json({
      code: 500,
      message: '获取药品列表失败',
      error: error.message || '未知错误'
    });
  }
});

export default router;