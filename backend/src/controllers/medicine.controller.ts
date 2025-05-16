import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// 统一错误处理函数
const handleError = (res: Response, error: any, message: string) => {
  console.error(message, error);
  res.status(500).json({ code: 500, message, error: error.message });
};

export const getMedicines = async (req: Request, res: Response) => {
  const { page = 1, pageSize = 10, keyword = '' } = req.query;
  const skip = (Number(page) - 1) * Number(pageSize);
  const take = Number(pageSize);

  try {
    const medicines = await prisma.drug.findMany({
      where: {
        OR: [
          { generic_name: { contains: keyword as string } },
          { brand_name: { contains: keyword as string } }
        ]
      },
      skip,
      take
    });

    const total = await prisma.drug.count({
      where: {
        OR: [
          { generic_name: { contains: keyword as string } },
          { brand_name: { contains: keyword as string } }
        ]
      }
    });

    res.json({
      data: {
        data: medicines,
        total
      }
    });
  } catch (error) {
    handleError(res, error, 'Error fetching medicines');
  }
};

export const createMedicine = async (req: Request, res: Response) => {
  const newMedicine = req.body;
  try {
    const medicine = await prisma.drug.create({
      data: newMedicine
    });
    res.json({ code: 200, message: '药品创建成功', data: medicine });
  } catch (error) {
    handleError(res, error, '创建药品失败');
  }
};

export const updateMedicine = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedMedicine = req.body;
  try {
    const medicine = await prisma.drug.update({
      where: { drug_code: id },
      data: updatedMedicine
    });
    res.json({ code: 200, message: '药品更新成功', data: medicine });
  } catch (error) {
    handleError(res, error, '更新药品失败');
  }
};

export const deleteMedicine = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await prisma.drug.delete({
      where: { drug_code: id }
    });
    res.json({ code: 200, message: '药品删除成功' });
  } catch (error) {
    handleError(res, error, '删除药品失败');
  }
};