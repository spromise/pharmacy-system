import { Request, Response } from 'express';
import { PrismaClient, Inbound } from '@prisma/client';
const prisma = new PrismaClient();

// 定义查询参数类型
interface InboundQueryParams {
  page?: string;
  pageSize?: string;
  keyword?: string;
}

// 定义入库记录请求类型
interface InboundRequest {
  drug_code: string;
  batch_number: string;
  quantity: number;
  expiration_date: string | Date;
  pharmacist_id: number;
  drug?: {
    generic_name: string;
    brand_name?: string;
    dosage_form: string;
    specification?: string;
    manufacturer?: string;
    unit_price?: number;
  };
}

export const getInboundRecords = async (req: Request<{}, {}, {}, InboundQueryParams>, res: Response) => {
  try {
    const { page = '1', pageSize = '10', keyword = '' } = req.query;
    
    // 验证分页参数
    const pageNum = parseInt(page);
    const pageSizeNum = parseInt(pageSize);
    
    if (isNaN(pageNum) || isNaN(pageSizeNum) || pageSizeNum <= 0) {
      return res.status(400).json({ code: 400, message: '无效的分页参数' });
    }
    
    const skip = (pageNum - 1) * pageSizeNum;
    const take = pageSizeNum;

    // 构建搜索条件
    const searchConditions: any = {
      OR: []
    };
    
    if (keyword) {
      searchConditions.OR = [
        { drug: { generic_name: { contains: keyword } } },
        { drug: { brand_name: { contains: keyword } } },
        { drug_code: { contains: keyword } },
        { batch_number: { contains: keyword } }
      ];
    }

    // 分页查询入库记录
    const [inboundRecords, total] = await prisma.$transaction([
      prisma.inbound.findMany({
        where: searchConditions,
        skip,
        take,
        orderBy: { inbound_time: 'desc' },
        include: {
          drug: true,
          pharmacist: { select: { name: true } }
        }
      }),
      prisma.inbound.count({ where: searchConditions })
    ]);

    res.json({
      data: {
        list: inboundRecords,
        total,
        page: pageNum,
        pageSize: take
      }
    });
  } catch (error: any) {
    console.error('获取入库记录失败:', error.message);
    console.error('错误堆栈:', error.stack);
    res.status(500).json({ 
      code: 500, 
      message: '获取入库记录失败', 
      error: error.message 
    });
  }
};

export const createInboundRecord = async (req: Request<{}, {}, InboundRequest>, res: Response) => {
  const { 
    drug_code, 
    batch_number, 
    quantity, 
    expiration_date, 
    pharmacist_id, 
    drug 
  } = req.body;

  try {
    // 验证必填字段
    if (!drug_code || !batch_number || !quantity || !expiration_date || !pharmacist_id) {
      return res.status(400).json({ code: 400, message: '缺少必要参数' });
    }

    // 验证日期格式
    const expirationDateObj = new Date(expiration_date);
    if (isNaN(expirationDateObj.getTime())) {
      return res.status(400).json({ code: 400, message: '无效的日期格式' });
    }

    // 验证数量
    if (quantity <= 0) {
      return res.status(400).json({ code: 400, message: '入库数量必须大于0' });
    }

    // 使用事务确保数据一致性
    const result = await prisma.$transaction(async (tx) => {
      console.log('开始入库事务，药品编码:', drug_code);
      
      // 1. 检查药品是否存在
      let existingDrug = await tx.drug.findUnique({
        where: { drug_code }
      });

      // 2. 如果药品不存在且提供了药品信息，则创建新药品
      if (!existingDrug && drug) {
        console.log('创建新药品，编码:', drug_code);
        existingDrug = await tx.drug.create({
          data: {
            drug_code,
            generic_name: drug.generic_name,
            brand_name: drug.brand_name,
            dosage_form: drug.dosage_form,
            specification: drug.specification,
            manufacturer: drug.manufacturer,
            unit_price: drug.unit_price
          }
        });
      } else if (!existingDrug && !drug) {
        throw new Error('药品不存在且未提供创建信息');
      }

      // 3. 检查库存批次是否存在
      let inventory = await tx.inventory.findUnique({
        where: { 
          drug_code_batch_number: {
            drug_code,
            batch_number
          }
        }
      });

      const currentDate = new Date();
      
      // 4. 如果库存不存在，创建新库存记录
      if (!inventory) {
        console.log('创建新库存记录，药品编码:', drug_code, '批次号:', batch_number);
        inventory = await tx.inventory.create({
          data: {
            drug_code,
            batch_number,
            stock_quantity: quantity,
            alert_threshold: 50,
            last_inbound_time: currentDate
          }
        });
      } else {
        // 5. 如果库存存在，更新库存数量
        console.log('更新库存数量，药品编码:', drug_code, '批次号:', batch_number);
        
        // 检查批次是否已过期
        if (new Date(inventory.expiration_date) < currentDate) {
          throw new Error('所选批次已过期，无法入库');
        }
        
        inventory = await tx.inventory.update({
          where: { 
            drug_code_batch_number: {
              drug_code,
              batch_number
            }
          },
          data: {
            stock_quantity: { increment: quantity },
            last_inbound_time: currentDate
          }
        });
      }

      // 6. 创建入库记录
      console.log('创建入库记录，药品编码:', drug_code, '批次号:', batch_number);
      const inboundRecord = await tx.inbound.create({
        data: {
          drug_code,
          batch_number,
          quantity,
          pharmacist_id,
          expiration_date: expirationDateObj,
          inbound_time: currentDate
        },
        include: {
          drug: true,
          pharmacist: { select: { name: true } }
        }
      });

      console.log('入库记录创建成功，ID:', inboundRecord.inbound_id);
      return {
        message: '入库成功',
        data: inboundRecord
      };
    });

    res.json({ code: 200, ...result });
  } catch (error: any) {
    console.error('创建入库记录失败:', error.message);
    console.error('错误详情:', error);
    
    // 区分已知错误和未知错误
    if (error.message.includes('药品不存在且未提供创建信息')) {
      return res.status(400).json({ code: 400, message: error.message });
    }
    
    if (error.message.includes('所选批次已过期')) {
      return res.status(400).json({ code: 400, message: error.message });
    }
    
    res.status(500).json({ 
      code: 500, 
      message: error.message || '创建入库记录失败', 
      error: error.message 
    });
  }
};

/**
 * 获取药师列表
 */
export const getPharmacistList = async (req: Request, res: Response) => {
  try {
    const pharmacists = await prisma.pharmacist.findMany();
    res.json({ code: 200, list: pharmacists });
  } catch (error: any) {
    console.error('获取药师列表失败:', error.message);
    res.status(500).json({ 
      code: 500, 
      message: '获取药师列表失败', 
      error: error.message 
    });
  }
};

/**
 * 检查药品是否存在
 */
export const checkDrugExists = async (req: Request<{ drug_code: string }>, res: Response) => {
  const { drug_code } = req.params;

  try {
    const drug = await prisma.drug.findUnique({
      where: { drug_code }
    });

    const response = {
      exists: !!drug,
      drug: drug
    };

    res.json(response);
  } catch (error: any) {
    console.error('检查药品存在性失败:', error.message);
    res.status(500).json({ 
      code: 500, 
      message: '检查药品存在性失败', 
      error: error.message 
    });
  }
};