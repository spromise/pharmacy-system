import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 获取所有患者
export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await prisma.patient.findMany();
    res.status(200).json({ code: 200, data: patients });
  } catch (error) {
    res.status(500).json({ code: 500, message: '获取患者失败' });
  }
};

export const getPrescriptionsByPatient = async (req: Request, res: Response) => {
  const { visitId } = req.params;
  try {
    const prescriptions = await prisma.prescription.findMany({
      where: { patient_visit_id: visitId },
      select: {
        prescription_id: true,
        create_time: true,
        prescriptionDetails: {
          select: {
            unit_price: true,
            quantity: true,
            usage_instruction: true,
            pickupStatus: true,
            drug_code: true, // 添加药品编码字段
            drug: { 
              select: { 
                generic_name: true, // 药品通用名（如果需要商品名可添加）
                drug_code: true // 如果药品表中存储了drug_code，可在此处获取
              } 
            }
          },
          orderBy: { prescription_id: 'desc' }, // 按处方明细的处方ID倒序（可选）
        },
        doctor: { select: { name: true } },
        patient: { select: { name: true } },
      },
      orderBy: { create_time: 'desc' }, // 主表按处方创建时间倒序
    });

    const formatted = prescriptions.flatMap(p => 
      p.prescriptionDetails.map(d => ({
        prescription_id: p.prescription_id,
        drug_code: d.drug_code || d.drug.drug_code, // 优先使用明细中的编码（如果有）
        drug_name: d.drug?.generic_name || '未知药品',
        unit_price: d.unit_price,
        quantity: d.quantity,
        total_price: d.unit_price * d.quantity,
        doctor_name: p.doctor?.name || '未知医生',
        usage_instruction: d.usage_instruction,
        pickupStatus: d.pickupStatus,
        oldStatus: d.pickupStatus, // 保留原始状态用于回滚
      }))
    );

    res.status(200).json({ code: 200, data: formatted });
  } catch (error) {
    console.error('获取处方失败:', error);
    res.status(500).json({ 
      code: 500, 
      message: '获取处方失败', 
      error: error.message 
    });
  }
};

// 更新处方明细取药状态
export const updatePrescriptionDetailStatus = async (req: Request, res: Response) => {
  const { prescriptionId, drugCode } = req.params;
  const { pickupStatus } = req.body;

  try {
    const updated = await prisma.prescriptionDetail.update({
      where: { 
        prescription_id_drug_code: {
          prescription_id: parseInt(prescriptionId),
          drug_code: drugCode
        }
      },
      data: { pickupStatus }
    });

    res.status(200).json({ code: 200, data: updated });
  } catch (error) {
    res.status(500).json({ code: 500, message: '更新状态失败' });
  }
};