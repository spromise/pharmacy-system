import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// 创建药品
export const createMedicine = async (data: {
  name: string
  dosageForm?: string
  price: number
}) => {
  return prisma.medicine.create({ data })
}

// 分页查询药品
export const getMedicines = async (params: {
  page: number
  pageSize: number
  keyword?: string
}) => {
  return prisma.medicine.findMany({
    skip: (params.page - 1) * params.pageSize,
    take: params.pageSize,
    where: {
      OR: [
        { name: { contains: params.keyword } },
        { spec: { contains: params.keyword } }
      ]
    }
  })
}

// 库存调整（原子操作）
export const updateInventory = async (medicineId: number, quantity: number) => {
  return prisma.medicine.update({
    where: { id: medicineId },
    data: { inventory: { increment: quantity } }
  })
}