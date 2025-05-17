import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 创建盘点记录并更新库存
export const createInventoryCheck = async (req: any, res: any) => {
  const inventoryCheckItems = req.body;

  try {
    const transactionOperations = inventoryCheckItems.map(item => {
      const { 
        drug_code, 
        batch_number, // 添加批次号
        physical_quantity, 
        discrepancy_reason, 
        pharmacist_id,
        check_time: rawCheckTime 
      } = item;
      
      return async () => {
        // 查询当前库存，需要同时使用 drug_code 和 batch_number
        const inventory = await prisma.inventory.findFirst({
          where: { drug_code, batch_number } // 修改查询条件
        });
        
        if (!inventory) {
          throw new Error(`未找到药品 ${drug_code} 批次 ${batch_number} 的库存记录`);
        }
        
        const system_quantity = inventory.stock_quantity;
        
        // 处理 check_time
        let check_time: Date;
        if (rawCheckTime instanceof Date) {
          check_time = rawCheckTime;
        } else if (typeof rawCheckTime === 'string') {
          check_time = new Date(rawCheckTime);
          if (isNaN(check_time.getTime())) {
            check_time = new Date();
          }
        } else {
          check_time = new Date();
        }
        
        // 创建盘点记录
        const inventoryCheck = await prisma.inventoryCheck.create({
          data: {
            drug_code,
            batch_number, // 添加批次号
            physical_quantity,
            system_quantity,
            discrepancy_reason,
            pharmacist_id,
            check_time: check_time.toISOString()
          }
        });
        
        // 更新库存数量，使用复合唯一键
        await prisma.inventory.update({
          where: { drug_code_batch_number: { drug_code, batch_number } }, // 修改更新条件
          data: { stock_quantity: physical_quantity }
        });
        
        return inventoryCheck;
      };
    });
    
    const results = await prisma.$transaction(transactionOperations.map(operation => operation()));
    
    res.json({ code: 200, message: '盘点记录创建成功，库存已更新', data: results });
  } catch (error) {
    console.error('创建盘点记录失败:', error);
    res.status(500).json({ code: 500, message: error.message || '创建盘点记录失败' });
  }
};

// 后端需要添加获取盘点记录的接口
export const getInventoryCheckRecords = async (req: any, res: any) => {
  const { page = 1, pageSize = 10, keyword = '' } = req.query;
  
  try {
    // 查询条件
    const where = keyword 
      ? { drug_code: { contains: keyword } } 
      : {};
    
    // 获取盘点记录列表
    const records = await prisma.inventoryCheck.findMany({
      where,
      skip: (parseInt(page) - 1) * parseInt(pageSize),
      take: parseInt(pageSize),
      orderBy: { check_time: 'desc' }
    });
    
    // 获取总记录数
    const total = await prisma.inventoryCheck.count({ where });
    
    res.json({ code: 200, list: records, total });
  } catch (error) {
    res.status(500).json({ code: 500, message: '获取盘点记录失败', error });
  }
};