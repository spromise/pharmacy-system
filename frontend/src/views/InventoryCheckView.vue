<template>
  <div>
    <!-- 盘点记录查询 -->
    <el-card class="box-card">
      <template #header>
        <div class="clearfix">
          <!-- 库存盘点按钮 -->
          <el-button style="float: left; padding: 2px 1" plain @click="checkDialogVisible = true">
            开始库存盘点
          </el-button>
          <span>盘点记录查询</span>
          <el-button style="float: right; padding: 3px 0" link @click="refreshCheckRecords">
            <el-icon>
              <Refresh />
            </el-icon>刷新
          </el-button>
        </div>
      </template>

      <!-- 搜索栏 -->
      <el-row class="mb-4">
        <el-col :span="8">
          <el-input v-model="searchCheckKey" placeholder="请输入药品本位码" clearable @keyup.enter="searchCheckRecords">
            <template #append>
              <el-button @click="searchCheckRecords">
                <el-icon>
                  <Search />
                </el-icon>搜索
              </el-button>
            </template>
          </el-input>
        </el-col>
      </el-row>

      <!-- 盘点记录表格 -->
      <el-table :data="inventoryCheckRecords" stripe style="width: 100%">
        <el-table-column prop="check_id" label="盘点记录ID" />
        <el-table-column prop="drug_code" label="药品本位码" />
        <el-table-column prop="physical_quantity" label="实际盘点数量" />
        <el-table-column prop="system_quantity" label="系统记录数量" />
        <el-table-column prop="discrepancy_reason" label="差异原因" />
        <el-table-column prop="check_time" label="盘点时间">
          <template #default="scope">
            {{ formatDate(scope.row.check_time) }}
          </template>
        </el-table-column>
        <el-table-column label="操作药师">
          <template #default="scope">
            {{ getPharmacistName(scope.row.operator_id) }}
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination @size-change="handleCheckSizeChange" @current-change="handleCheckCurrentChange"
        :current-page="checkCurrentPage" :page-sizes="[10, 20, 30, 50]" :page-size="checkPageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="checkTotal" style="margin-top: 20px" />
    </el-card>

    <!-- 库存盘点弹窗 -->
    <el-dialog v-model="checkDialogVisible" title="库存盘点" @close="resetInventoryCheckForm" width="800px">
      <el-form :model="inventoryCheckForm" ref="inventoryCheckFormRef" label-width="120px">
        <el-form-item label="药师" required>
          <el-select v-model="inventoryCheckForm.operator_id" placeholder="请选择药师" :disabled="pharmacists.length === 0">
            <el-option v-for="pharmacist in pharmacists" :key="pharmacist.pharmacist_id"
              :label="`${pharmacist.name} (${pharmacist.pharmacist_id})`" :value="pharmacist.pharmacist_id" />
          </el-select>
          <template #empty>
            <div style="padding: 10px 0; text-align: center; color: #909399;">
              暂无可用药师，请先维护药师信息
            </div>
          </template>
        </el-form-item>

        <el-form-item label="盘点药品">
          <el-button type="primary" size="small" @click="addNewMedicine">
            <el-icon>
              <Plus />
            </el-icon>添加药品
          </el-button>
        </el-form-item>

        <div v-for="(item, index) in inventoryCheckForm.items" :key="index" class="medicine-item">
          <el-card shadow="never" class="mb-3">
            <el-form-item label="药品选择">
              <el-select v-model="item.medicine_id" placeholder="请选择药品" @change="onMedicineChange(index)">
                <el-option v-for="medicine in inventories" :key="medicine.inventory_id"
                  :label="medicine.drug.drug_code + ' - ' + medicine.drug.generic_name"
                  :value="medicine.inventory_id" />
              </el-select>
            </el-form-item>

            <el-form-item label="系统数量">
              <el-input v-model="item.system_quantity" disabled />
            </el-form-item>

            <el-form-item label="实际数量">
              <el-input-number v-model="item.physical_quantity" :min="0" placeholder="请输入实际盘点数量"
                @change="calculateDifference(index)" />
            </el-form-item>

            <el-form-item label="差异数量">
              <el-input v-model="item.difference" disabled />
            </el-form-item>

            <el-form-item label="差异原因" :required="item.difference !== 0">
              <el-input v-model="item.discrepancy_reason" placeholder="请输入差异原因" />
            </el-form-item>

            <el-form-item>
              <el-button type="danger" size="small" @click="removeMedicine(index)"
                v-if="inventoryCheckForm.items.length > 1">
                <el-icon>
                  <Delete />
                </el-icon>删除
              </el-button>
            </el-form-item>
          </el-card>
        </div>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="checkDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitInventoryCheck">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { Refresh, Search, Plus, Delete } from '@element-plus/icons-vue';
import {
  getInventoryCheckRecords,
  getInventoryList,
  createInventoryCheck,
  getPharmacistList
} from '@/api/inventoryCheck';
import { ElMessage } from 'element-plus';
import dayjs from 'dayjs';

// 盘点记录查询相关
const inventoryCheckRecords = ref<any[]>([]);
const searchCheckKey = ref('');
const checkCurrentPage = ref(1);
const checkPageSize = ref(10);
const checkTotal = ref(0);

// 库存列表
const inventories = ref<any[]>([]);

// 药师列表
const pharmacists = ref<any[]>([]);

// 库存盘点弹窗相关
const checkDialogVisible = ref(false);
const inventoryCheckFormRef = ref(null);

// 初始化表单数据
const inventoryCheckForm = reactive({
  operator_id: null, // 修改为null，对应下拉选择的初始值
  items: [
    {
      medicine_id: null,
      system_quantity: 0,
      physical_quantity: 0,
      difference: 0,
      discrepancy_reason: ''
    }
  ]
});

// 格式化日期函数
const formatDate = (dateStr: string) => {
  return dayjs(dateStr).format('YYYY-MM-DD HH:mm:ss');
};

// 根据药师ID获取药师名称
const getPharmacistName = (pharmacistId: number) => {
  const pharmacist = pharmacists.value.find(p => p.pharmacist_id === pharmacistId);
  return pharmacist?.name || `未知药师(${pharmacistId})`;
};

// 获取盘点记录
const fetchInventoryCheckRecords = async () => {
  try {
    const response = await getInventoryCheckRecords({
      page: checkCurrentPage.value,
      pageSize: checkPageSize.value,
      keyword: searchCheckKey.value
    });
    
    // 根据实际API返回结构调整
    inventoryCheckRecords.value = response.list || [];
    checkTotal.value = response.total || 0;
  } catch (error) {
    console.error('Error fetching inventory check records:', error);
    ElMessage.error('获取盘点记录失败');
  }
};

// 搜索盘点记录
const searchCheckRecords = () => {
  checkCurrentPage.value = 1;
  fetchInventoryCheckRecords();
};

// 分页相关方法
const handleCheckSizeChange = (newSize: number) => {
  checkPageSize.value = newSize;
  fetchInventoryCheckRecords();
};

const handleCheckCurrentChange = (newPage: number) => {
  checkCurrentPage.value = newPage;
  fetchInventoryCheckRecords();
};

// 刷新盘点记录
const refreshCheckRecords = () => {
  fetchInventoryCheckRecords();
};

// 获取库存列表
const fetchInventories = async () => {
  try {
    const response = await getInventoryList({
      page: 1,
      pageSize: 1000 // 假设库存数量不会超过1000
    });
    inventories.value = response.data.list;
  } catch (error) {
    console.error('Error fetching inventories:', error);
    ElMessage.error('获取库存列表失败');
  }
};

// 获取药师列表
const fetchPharmacists = async () => {
  try {
    const response = await getPharmacistList();
    // 直接使用 response.list，适配您的API结构
    pharmacists.value = response.list || [];
  } catch (error) {
    console.error('Error fetching pharmacists:', error);
    ElMessage.error('获取药师列表失败');
  }
};

// 添加新药品行
const addNewMedicine = () => {
  inventoryCheckForm.items.push({
    medicine_id: null,
    system_quantity: 0,
    physical_quantity: 0,
    difference: 0,
    discrepancy_reason: ''
  });
};

// 移除药品行
const removeMedicine = (index: number) => {
  inventoryCheckForm.items.splice(index, 1);
};

// 药品选择变化时更新系统数量
const onMedicineChange = (index: number) => {
  const item = inventoryCheckForm.items[index];
  const selectedMedicine = inventories.value.find(
    (medicine) => medicine.inventory_id === item.medicine_id
  );

  if (selectedMedicine) {
    item.system_quantity = selectedMedicine.stock_quantity;
    calculateDifference(index);
  }
};

// 计算差异数量
const calculateDifference = (index: number) => {
  const item = inventoryCheckForm.items[index];
  item.difference = item.physical_quantity - item.system_quantity;
};

// 重置表单
const resetInventoryCheckForm = () => {
  inventoryCheckForm.operator_id = null;
  inventoryCheckForm.items = [
    {
      medicine_id: null,
      system_quantity: 0,
      physical_quantity: 0,
      difference: 0,
      discrepancy_reason: ''
    }
  ];
};

// 提交库存盘点结果
const submitInventoryCheck = async () => {
  // 表单验证
  if (!inventoryCheckForm.operator_id) {
    ElMessage.warning('请选择操作药师');
    return;
  }

  const validItems = inventoryCheckForm.items.filter(
    (item) => item.medicine_id && item.physical_quantity !== null
  );

  if (validItems.length === 0) {
    ElMessage.warning('请至少选择一种药品并输入实际数量');
    return;
  }

  // 检查差异原因是否填写
  for (const item of validItems) {
    if (item.difference !== 0 && !item.discrepancy_reason) {
      ElMessage.warning('存在数量差异，请填写差异原因');
      return;
    }
  }

  try {
    const checkTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const inventoryCheckData = validItems.map((item) => {
      const medicine = inventories.value.find(
        (m) => m.inventory_id === item.medicine_id
      );

      return {
        drug_code: medicine.drug.drug_code,
        physical_quantity: item.physical_quantity,
        system_quantity: item.system_quantity,
        discrepancy_reason: item.discrepancy_reason || null,
        check_time: checkTime,
        operator_id: inventoryCheckForm.operator_id
      };
    });

    await createInventoryCheck(inventoryCheckData);
    ElMessage.success('盘点结果提交成功');
    checkDialogVisible.value = false; // 关闭弹窗
    refreshCheckRecords();
  } catch (error) {
    console.error('Error submitting inventory check:', error);
    ElMessage.error('盘点结果提交失败');
  }
};

onMounted(() => {
  fetchInventoryCheckRecords();
  fetchInventories();
  fetchPharmacists();
});
</script>

<style scoped>
.medicine-item {
  position: relative;
}

.medicine-item .el-card {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  transition: all 0.3s;
}

.medicine-item .el-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

/* 确保弹窗内容可见 */
.el-dialog__body {
  padding: 20px;
  max-height: 600px;
  overflow-y: auto;
}
</style>