import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPrescriptions = async (req: any, res: any) => {
  const { page = 1, pageSize = 10, keyword = '', status } = req.query;
  const skip = (page - 1) * pageSize;
  const take = parseInt(pageSize);

  const prescriptions = await prisma.prescription.findMany({
    where: {
      AND: [
        { patient: { name: { contains: keyword } } },
        status ? { status: status as any } : {}
      ]
    },
    skip,
    take,
    include: {
      patient: true,
      doctor: true,
      prescriptionDetails: true
    }
  });

  const total = await prisma.prescription.count({
    where: {
      AND: [
        { patient: { name: { contains: keyword } } },
        status ? { status: status as any } : {}
      ]
    }
  });

  res.json({
    data: {
      list: prescriptions,
      total,
      page: parseInt(page),
      pageSize: take
    }
  });
};

export const createPrescription = async (req: any, res: any) => {
  const newPrescription = req.body;
  try {
    const prescription = await prisma.prescription.create({
      data: newPrescription
    });
    res.json({ code: 200, message: '处方创建成功', data: prescription });
  } catch (error) {
    res.status(500).json({ code: 500, message: '创建处方失败', error });
  }
};

export const updatePrescription = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const updatedPrescription = req.body;
  try {
    const prescription = await prisma.prescription.update({
      where: { prescription_id: id },
      data: updatedPrescription
    });
    res.json({ code: 200, message: '处方更新成功', data: prescription });
  } catch (error) {
    res.status(500).json({ code: 500, message: '更新处方失败', error });
  }
};

export const deletePrescription = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.prescription.delete({
      where: { prescription_id: id }
    });
    res.json({ code: 200, message: '处方删除成功' });
  } catch (error) {
    res.status(500).json({ code: 500, message: '删除处方失败', error });
  }
};