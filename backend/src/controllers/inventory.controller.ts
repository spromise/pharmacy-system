import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// 统一错误处理函数
const handleError = (res: Response, error: any, message: string) => {
  console.error(message, error);
  res.status(500).json({ code: 500, message, error: error.message });
};

export const getInventoryList = async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10, keyword = '', status, minExpirationDate, maxExpirationDate } = req.query;
    const skip = (Number(page) - 1) * Number(pageSize);
    const take = Number(pageSize);

    const where: any = {
      drug: {
        OR: [
          { generic_name: { contains: keyword as string } },
          { brand_name: { contains: keyword as string } }
        ]
      }
    };

    if (status) {
      where.status = status;
    }

    if (minExpirationDate) {
      where.expiration_date = { ...where.expiration_date, gte: new Date(minExpirationDate as string) };
    }

    if (maxExpirationDate) {
      where.expiration_date = { ...where.expiration_date, lte: new Date(maxExpirationDate as string) };
    }

    const inventoryList = await prisma.inventory.findMany({
      where,
      skip,
      take,
      include: {
        drug: true
      }
    });

    const total = await prisma.inventory.count({ where });

    res.json({
      data: {
        list: inventoryList,
        total,
        page: Number(page),
        pageSize: take
      }
    });
  } catch (error) {
    handleError(res, error, '获取库存列表失败');
  }
};

export const createInventoryRecord = async (req: Request, res: Response) => {
  try {
    const newInventoryRecord = req.body;
    const inventoryRecord = await prisma.inventory.create({
      data: newInventoryRecord
    });
    res.json({ code: 200, message: '库存记录创建成功', data: inventoryRecord });
  } catch (error) {
    handleError(res, error, '创建库存记录失败');
  }
};

// 更新库存记录
export const updateInventoryRecord = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedInventoryRecord = req.body;
    const inventoryRecord = await prisma.inventory.update({
      where: { id: parseInt(id) },
      data: updatedInventoryRecord
    });
    res.json({ code: 200, message: '库存记录更新成功', data: inventoryRecord });
  } catch (error) {
    handleError(res, error, '更新库存记录失败');
  }
};

// 删除库存记录
export const deleteInventoryRecord = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.inventory.delete({
      where: { id: parseInt(id) }
    });
    res.json({ code: 200, message: '库存记录删除成功' });
  } catch (error) {
    handleError(res, error, '删除库存记录失败');
  }
};