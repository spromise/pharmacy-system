import { Router } from 'express'
import { getMedicines } from '../controllers/medicine'

const router = Router()
router.get('/medicines', getMedicines)
export default router