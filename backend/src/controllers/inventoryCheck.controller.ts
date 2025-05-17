import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 创建盘点记录并更新库存
export const createInventoryCheck = async (req: any, res: any) => {
  const { drug_code, physical_quantity, discrepancy_reason, operator_id } = req.body;

  try {
    // 获取系统记录的库存数量
    const inventory = await prisma.inventory.findFirst({
      where: { drug_code },
    });

    if (!inventory) {
      return res.status(404).json({ code: 404, message: '未找到该药品的库存记录' });
    }

    const system_quantity = inventory.stock_quantity;

    // 创建盘点记录
    const inventoryCheck = await prisma.inventoryCheck.create({
      data: {
        drug_code,
        physical_quantity,
        system_quantity,
        discrepancy_reason,
        operator_id,
      },
    });

    // 更新库存数量
    await prisma.inventory.update({
      where: { drug_code },
      data: { stock_quantity: physical_quantity },
    });

    res.json({ code: 200, message: '盘点记录创建成功，库存已更新', data: inventoryCheck });
  } catch (error) {
    res.status(500).json({ code: 500, message: '创建盘点记录失败', error });
  }
};