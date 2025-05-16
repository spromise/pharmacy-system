// src/app.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
// 后端 app.ts
import medicineRoutes from './routes/medicineRoutes';
// 后端 app.ts
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const corsOptions = {
  origin: 'http://localhost:5173', // 前端域名
  credentials: true // 允许携带cookie等凭证
};

app.use(cors({
  origin: 'http://localhost:5173', // 允许前端域名
  credentials: true, // 允许携带凭证（如cookies）
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 挂载API路由
app.use('/api', medicineRoutes);