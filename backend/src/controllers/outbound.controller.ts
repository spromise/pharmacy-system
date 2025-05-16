import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getOutboundRecords = async (req: any, res: any) => {
  const { page = 1, pageSize = 10, keyword = '' } = req.query;
  const skip = (page - 1) * pageSize;
  const take = parseInt(pageSize);

  const outboundRecords = await prisma.outbound.findMany({
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
      drug: true,
      prescription: true
    }
  });

  const total = await prisma.outbound.count({
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
      list: outboundRecords,
      total,
      page: parseInt(page),
      pageSize: take
    }
  });
};

export const createOutboundRecord = async (req: any, res: any) => {
  const newOutboundRecord = req.body;
  try {
    const outboundRecord = await prisma.outbound.create({
      data: newOutboundRecord
    });
    res.json({ code: 200, message: '出库记录创建成功', data: outboundRecord });
  } catch (error) {
    res.status(500).json({ code: 500, message: '创建出库记录失败', error });
  }
};