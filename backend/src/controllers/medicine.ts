import type { Request, Response } from 'express'
import { prisma } from '../utils/prisma'

interface CreateMedicineBody {
  name: string
  dosageForm?: string
  inventory?: number
}

export const createMedicine = async (
  req: Request<{}, {}, CreateMedicineBody>,
  res: Response
) => {
  const newMedicine = await prisma.medicine.create({
    data: req.body
  })
  res.status(201).json(newMedicine)
}