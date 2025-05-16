import express from 'express';
import { getPrescriptions, createPrescription, updatePrescription, deletePrescription } from '../controllers/prescription.controller.ts';

const router = express.Router();

router.get('/', getPrescriptions);
router.post('/', createPrescription);
router.put('/:id', updatePrescription);
router.delete('/:id', deletePrescription);

export default router;