import { getMedicines, createMedicine } from '../controllers/MedicineController.js'

const router = express.Router()
router.get('/', getMedicines)
router.post('/', createMedicine)