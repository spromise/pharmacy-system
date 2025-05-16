pharmacy-system/
├── frontend/
│   ├── src/
│   │   ├── api/               # 接口层（TS类型化）
│   │   │   ├── medicine.ts
│   │   │   ├── inventory.ts
│   │   │   ├── inboundOutbound.ts
│   │   │   ├── prescription.ts
│   │   │   └── report.ts
│   │   ├── assets/            # 静态资源
│   │   ├── layout/            # 布局
│   │   │   └── Layout.vue
│   │   ├── router/            # 路由配置
│   │   │   └── index.ts
│   │   ├── stores/            # Pinia状态管理（TS）
│   │   │   ├── medicine.ts
│   │   │   ├── inventory.ts
│   │   │   ├── inboundOutbound.ts
│   │   │   ├── prescription.ts
│   │   │   └── report.ts
│   │   ├── views/             # 页面视图
│   │   │   ├── MedicineView.vue
│   │   │   ├── InventoryView.vue
│   │   │   ├── InboundOutboundView.vue
│   │   │   ├── PrescriptionView.vue
│   │   │   ├── ReportView.vue
│   │   ├── main.ts            # 入口文件
│   │   └── vite-env.d.ts      # Vite类型声明
│   ├── .env.development       # 前端环境变量
│   ├── tsconfig.json          # TS配置
│   ├── vite.config.ts         # Vite配置
│   └── package.json
├── backend/                   # 后端项目
│   ├── prisma/                
│   │   ├── schema.prisma      # 数据模型定义
│   │   └── migrations/        # 迁移记录
│   ├── src/
│   │   ├── controllers/       # 控制器（TS）
│   │   │   ├── medicine.ts    
│   │   │   └── inventory.ts   
│   │   ├── routes/            # 路由定义
│   │   │   └── index.ts       
│   │   ├── services/          # 业务逻辑层
│   │   │   └── medicine.ts    
│   │   ├── types/             # 自定义类型
│   │   │   └── medicine.d.ts  
│   │   ├── utils/             # 工具类
│   │   │   ├── prisma.ts      # Prisma客户端实例
│   │   │   └── logger.ts      # 日志工具
│   │   ├── app.ts             # Express主应用
│   │   └── server.ts          # 服务启动入口
│   ├── .env                   # 后端环境变量
│   ├── tsconfig.json          # TS配置
│   └── package.json
│
└── README.md                  # 项目说明