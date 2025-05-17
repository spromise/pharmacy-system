import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import { errorHandler } from './utils/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: 'http://localhost:5173', // 您的前端域名
  credentials: true, // 允许携带凭证
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // 应用CORS配置
app.use(express.json());

// 路由
app.use('/api', routes);

// 错误处理中间件
app.use(errorHandler);

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});