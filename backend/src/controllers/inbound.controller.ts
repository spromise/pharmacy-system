import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getInboundRecords = async (req: any, res: any) => {
  const { page = 1, pageSize = 10, keyword = '' } = req.query;
  const skip = (page - 1) * pageSize;
  const take = parseInt(pageSize);

  const inboundRecords = await prisma.inbound.findMany({
    where: {
      drug: {
        OR: [
          { generic_name: { contains: keyword } },
          { brand_name: { contains: keyword } }
        ]
      }
    },
    skip,
    take,
    include: {
      drug: true
    }
  });

  const total = await prisma.inbound.count({
    where: {
      drug: {
        OR: [
          { generic_name: { contains: keyword } },
          { brand_name: { contains: keyword } }
        ]
      }
    }
  });

  res.json({
    data: {
      list: inboundRecords,
      total,
      page: parseInt(page),
      pageSize: take
    }
  });
};

export const createInboundRecord = async (req: any, res: any) => {
  const newInboundRecord = req.body;
  try {
    const inboundRecord = await prisma.inbound.create({
      data: newInboundRecord
    });
    res.json({ code: 200, message: '入库记录创建成功', data: inboundRecord });
  } catch (error) {
    res.status(500).json({ code: 500, message: '创建入库记录失败', error });
  }
};