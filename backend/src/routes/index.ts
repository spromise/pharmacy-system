import express from 'express';

// Inbound routes
import { getInboundRecords, createInboundRecord, getPharmacistList, checkDrugExists  } from '../controllers/inbound.controller.ts';
// Outbound routes
import { getOutboundRecords, createOutboundRecord } from '../controllers/outbound.controller.ts';
// Medicine routes
import { getMedicines, createMedicine, updateMedicine, deleteMedicine } from '../controllers/medicine.controller.ts';
// Prescription routes
import { getPatients, getPrescriptionsByPatient, updatePrescriptionDetailStatus } from '../controllers/prescription.controller';
// Inventory routes
import { getInventoryList, createInventoryRecord } from '../controllers/inventory.controller.ts';
// inventoryCheck routes
import { createInventoryCheck } from '../controllers/inventoryCheck.controller';

const router = express.Router();

// Inbound routes
router.get('/inbound', getInboundRecords);
router.post('/inbound', createInboundRecord);
router.get('/pharmacists', getPharmacistList);
router.get('/medicines/:drug_code', checkDrugExists);

// Outbound routes
router.get('/outbound', getOutboundRecords);
router.post('/outbound', createOutboundRecord);

// Medicine routes
router.get('/medicines', getMedicines);
router.post('/medicines', createMedicine);
router.put('/medicines/:id', updateMedicine);
router.delete('/medicines/:id', deleteMedicine);

// Prescription routes
// 患者相关路由
router.get('/patients', getPatients);
router.get('/prescriptions/patient/:visitId', getPrescriptionsByPatient);

// 处方状态管理路由
router.put('/prescription-details/:prescriptionId/:drugCode/status', updatePrescriptionDetailStatus);
// Inventory routes
router.get('/inventory', getInventoryList);
router.post('/inventory', createInventoryRecord);

// inventoryCheck routes
router.post('/inventory-check', createInventoryCheck);

export default router;