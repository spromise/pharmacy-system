import type { Medicine } from '@/types/medicine'

export const getMedicines = async (
  params: PaginationParams
): Promise<Medicine[]> => {
  const res = await axios.get('/api/medicines', { params })
  return res.data
}