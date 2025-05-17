<template>
  <div class="prescription-view">
    <!-- 筛选栏 -->
    <el-card class="filter-container">
      <el-row>
        <el-col :span="6">
          <el-select
            v-model="selectedPatientVisitId"
            placeholder="请选择患者"
            clearable
            @change="fetchPrescriptions"
          >
            <el-option
              v-for="patient in patientList"
              :key="patient.visit_id"
              :label="patient.name"
              :value="patient.visit_id"
            />
          </el-select>
        </el-col>
      </el-row>
    </el-card>

    <!-- 处方列表 -->
    <el-card>
      <h2 style="margin-bottom: 20px">处方详情 - {{ selectedPatientName }}</h2>
      <el-table
        :data="groupedPrescriptions.flatMap(group => group.items)"
        stripe
        border
        style="width: 100%"
      >
        <!-- 处方号合并列 -->
        <el-table-column
          :rowspan="getRowSpan(0)"
          label="处方号"
          width="80"
        >
          <template #default>
            <el-tag type="info" size="medium">
              {{ groupedPrescriptions[0].prescription_id }}
            </el-tag>
          </template>
        </el-table-column>

        <!-- 其他列正常显示 -->
        <el-table-column label="药品名" prop="drug_name" width="150" />
        <el-table-column label="药品数量" prop="quantity" width="90"/>
        <el-table-column label="总价" prop="total_price" width="90" />
        <el-table-column label="开立医生" prop="doctor_name" width="120" />
        <el-table-column label="使用建议" prop="usage_instruction" />

        <!-- 取药状态按钮列 -->
        <el-table-column label="取药状态" width="100">
          <template #default="{ row }">
            <el-button
              :type="row.pickupStatus === '已取药'? 'green' : 'blue'"
              :class="row.pickupStatus === '已取药'? 'green-bg' : 'blue-bg'"
              size="mini"
              @click="toggleStatus(row)"
            >
              {{ row.pickupStatus }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { getPatients, getPrescriptionsByPatient, updatePickupStatusApi } from '@/api/prescription';
import { ElMessage } from 'element-plus';

// 状态管理
const patientList = ref([]);
const selectedPatientVisitId = ref('');
const selectedPatientName = ref('');
const prescriptionList = ref([]);

// 分组数据
const groupedPrescriptions = computed(() => {
  const groups = {};
  prescriptionList.value.forEach(item => {
    if (!groups[item.prescription_id]) {
      groups[item.prescription_id] = {
        prescription_id: item.prescription_id,
        doctor_name: item.doctor_name,
        items: []
      };
    }
    groups[item.prescription_id].items.push(item);
  });
  return Object.values(groups);
});

// 计算行合并
const getRowSpan = (index) => {
  return groupedPrescriptions.value.reduce((sum, group) => sum + group.items.length, 0);
};

// 生命周期
onMounted(async () => {
  await fetchPatients();
});

// 获取患者列表
const fetchPatients = async () => {
  try {
    const res = await getPatients();
    patientList.value = res.data;
    if (patientList.value.length > 0) {
      selectedPatientVisitId.value = patientList.value[0].visit_id;
    }
  } catch (error) {
    ElMessage.error('获取患者列表失败');
  }
};

// 监听患者选择
watch(selectedPatientVisitId, async (newValue) => {
  if (newValue) {
    const patient = patientList.value.find(p => p.visit_id === newValue);
    selectedPatientName.value = patient?.name || '';
    await fetchPrescriptionsByPatient(newValue);
  }
});

// 获取处方
const fetchPrescriptionsByPatient = async (visitId) => {
  try {
    const res = await getPrescriptionsByPatient(visitId);
    prescriptionList.value = res.data.map(item => ({
     ...item,
      oldStatus: item.pickupStatus // 保存原始状态用于回滚
    }));
  } catch (error) {
    ElMessage.error('获取处方失败：' + error.message);
  }
};

// 切换状态
// 修改状态切换函数，确保传递正确的 drugCode
const toggleStatus = async (row) => {
  const newStatus = row.pickupStatus === '已取药' ? '未取药' : '已取药';
  
  // 检查 row.drug_code 是否存在
  if (!row.drug_code) {
    ElMessage.error('药品编码缺失，无法更新状态');
    return;
  }

  try {
    // 确保此处传递 row.drug_code 而非 undefined
    await updatePickupStatusApi(row.prescription_id, row.drug_code, newStatus);
    row.pickupStatus = newStatus;
    ElMessage.success('状态更新成功');
  } catch (error) {
    ElMessage.error('状态更新失败：' + error.message);
    row.pickupStatus = row.oldStatus; // 回滚状态
  }
};
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
}

/* 自定义状态颜色 */
.green-bg {
  background-color: #409eff1a!important; /* 绿色背景 */
  color: white;
}

.blue-bg {
  background-color: #409eff!important; /* 蓝色背景 */
  color: white;
}

.el-table.is-grouped th:first-child {
  vertical-align: middle!important;
}
</style>