backend/
├── prisma/
│   ├── schema.prisma    # 数据模型定义
│   └── migrations/      # 数据库迁移记录
├── src/
│   ├── controllers/     # 业务逻辑
│   │   └── MedicineController.js
│   ├── routes/          # 路由定义
│   │   └── medicineRoutes.js
│   ├── services/        # 数据服务
│   │   └── MedicineService.js
│   ├── utils/           # 工具类
│   │   └── errorHandler.js
│   └── app.js           # 应用入口


frontend/
├── src/
│   ├── api/          # 接口封装
│   │   └── medicine.js
│   ├── assets/       # 静态资源
│   ├── components/   # 通用组件
│   │   └── MedicineTable.vue
│   ├── router/       # 路由配置
│   ├── stores/       # Pinia状态管理
│   │   └── useMedicineStore.js
│   ├── views/        # 页面组件
│   │   ├── MedicineView.vue
│   │   └── InventoryView.vue
│   └── utils/        # 工具函数
│       └── request.js