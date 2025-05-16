import express from 'express';
import cors from 'cors';
import medicineRoutes from './routes/medicine.routes.ts';
import prescriptionRoutes from './routes/prescription.routes.ts';
import inboundRoutes from './routes/inbound.routes.ts';
import outboundRoutes from './routes/outbound.routes.ts';
import inventoryRoutes from './routes/inventory.routes.ts';
import { errorHandler } from './utils/errorHandler.ts';

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/medicines', medicineRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/inbound', inboundRoutes);
app.use('/api/outbound', outboundRoutes);
app.use('/api/inventory', inventoryRoutes);

// 错误处理中间件
app.use(errorHandler);

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});