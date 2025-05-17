import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// 统一错误处理函数
const handleError = (res: Response, error: any, message: string) => {
  console.error(message, error);
  res.status(500).json({ code: 500, message, error: error.message });
};

// 数据验证函数
const validateMedicineData = (data: any) => {
  const requiredFields = ['drug_code', 'generic_name', 'brand_name', 'unit_price'];
  const missingFields = requiredFields.filter(field => !(field in data) || !data[field]);

  if (missingFields.length > 0) {
    throw new Error(`缺少必要字段: ${missingFields.join(', ')}`);
  }

  // 过滤掉非药品模型字段
  return Object.fromEntries(
    Object.entries(data).filter(([key]) =>
      ['drug_code', 'generic_name', 'brand_name', 'dosage_form',
        'specification', 'manufacturer', 'unit_price'].includes(key)
    )
  );
};

// medicine.controller.ts

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
      code: 200,
      message: '获取药品列表成功',
      data: medicines, // 药品列表
      total           // 总数
    });
  } catch (error) {
    handleError(res, error, 'Error fetching medicines');
  }
};

export const createMedicine = async (req: Request, res: Response) => {
  try {
    const validatedData = validateMedicineData(req.body);
    const medicine = await prisma.drug.create({ data: validatedData });
    res.json({ code: 200, message: '药品创建成功', data: medicine });
  } catch (error) {
    handleError(res, error, '创建药品失败');
  }
};

export const batchCreateMedicines = async (req: Request, res: Response) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ code: 400, message: '请求体必须是数组' });
  }

  try {
    const medicines = req.body;

    // 验证每一条药品数据
    const validatedMedicines = medicines.map(validateMedicineData);

    // 批量创建
    const result = await prisma.drug.createMany({
      data: validatedMedicines,
      skipDuplicates: true // 可选：跳过重复项
    });

    res.json({ code: 200, message: `成功创建 ${result.count} 条药品记录` });
  } catch (error) {
    handleError(res, error, '批量创建药品失败');
  }
};

export const updateMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedData = validateMedicineData(req.body);

    const updatedMedicine = await prisma.drug.update({
      where: { drug_code: id },
      data: validatedData
    });

    res.json({ code: 200, message: '药品更新成功', data: updatedMedicine });
  } catch (error) {
    handleError(res, error, '更新药品失败');
  }
};

export const batchUpdateMedicines = async (req: Request, res: Response) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ code: 400, message: '请求体必须是数组' });
  }

  try {
    const updates = req.body;

    // 执行批量更新（逐条处理以确保事务一致性）
    const results = await Promise.all(
      updates.map(async (update) => {
        const { drug_code, ...data } = update;
        const validatedData = validateMedicineData({ drug_code, ...data });

        return prisma.drug.update({
          where: { drug_code },
          data: validatedData
        });
      })
    );

    res.json({ code: 200, message: `成功更新 ${results.length} 条药品记录`, data: results });
  } catch (error) {
    handleError(res, error, '批量更新药品失败');
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

export const batchDeleteMedicines = async (req: Request, res: Response) => {
  const { drugCodes } = req.body;

  if (!Array.isArray(drugCodes) || drugCodes.length === 0) {
    return res.status(400).json({ code: 400, message: '请提供要删除的药品代码数组' });
  }

  try {
    const result = await prisma.drug.deleteMany({
      where: { drug_code: { in: drugCodes } }
    });

    res.json({ code: 200, message: `成功删除 ${result.count} 条药品记录` });
  } catch (error) {
    handleError(res, error, '批量删除药品失败');
  }
};

export const getMedicinePriceHistory = async (req: Request, res: Response) => {
  const medicineId = req.params.medicineId;
  try {
    // 假设数据库中有一个表记录药品调价历史，这里简单模拟查询
    const priceHistory = await prisma.priceHistory.findMany({
      where: { drug_code: medicineId }
    });
    res.json({ code: 200, message: '获取药品调价历史成功', data: priceHistory });
  } catch (error) {
    handleError(res, error, '获取药品调价历史失败');
  }
};