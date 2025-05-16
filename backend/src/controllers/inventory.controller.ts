import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getInventoryList = async (req: any, res: any) => {
  const { page = 1, pageSize = 10, keyword = '', status, minExpirationDate, maxExpirationDate } = req.query;
  const skip = (page - 1) * pageSize;
  const take = parseInt(pageSize);

  const where: any = {
    drug: {
      OR: [
        { generic_name: { contains: keyword } },
        { brand_name: { contains: keyword } }
      ]
    }
  };

  if (status) {
    where.status = status;
  }

  if (minExpirationDate) {
    where.expiration_date = { gte: new Date(minExpirationDate) };
  }

  if (maxExpirationDate) {
    where.expiration_date = { lte: new Date(maxExpirationDate) };
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
      page: parseInt(page),
      pageSize: take
    }
  });
};

export const createInventoryRecord = async (req: any, res: any) => {
  const newInventoryRecord = req.body;
  try {
    const inventoryRecord = await prisma.inventory.create({
      data: newInventoryRecord
    });
    res.json({ code: 200, message: '库存记录创建成功', data: inventoryRecord });
  } catch (error) {
    res.status(500).json({ code: 500, message: '创建库存记录失败', error });
  }
};