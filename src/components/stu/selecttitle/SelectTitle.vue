<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const input = ref('')
const tableData = [
  {
    title: '设计毕业设计系统',
    class: '应用型课题',
    source: '企事业单位委托课题',
    teacher: '王玉文（3948749）',
    status: '确认通过',
  } ]
  const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]




</script>

<template>
  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">已选题目</span>
  </div>
  <el-table :data="tableData" border style="width: 1000px" class="table1">
    <el-table-column type="index" width="50" />
    <el-table-column prop="title" label="题目" width="180" />
    <el-table-column prop="class" label="类型" width="180" />
    <el-table-column prop="source" label="来源" />
    <el-table-column prop="teacher" label="指导教师" />
    <el-table-column prop="status" label="确认状态" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">题目列表</span>
  </div>
  <div class="condition">
    <span class="belongto">题目所属院系：</span>
    <el-select v-model="value" class="m-2" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> </el-select>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指导教师：</span>
      <el-input v-model="input" placeholder="请输入" style="width: 200px;"/>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题目类型：</span>
      <el-select v-model="value" class="m-2" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> </el-select>
      <br/>
      <el-button class="search">查询</el-button>
  </div>
  <el-table :data="tableData" border style="width: 1000px" class="table1">
    <el-table-column type="index" width="50" />
    <el-table-column prop="title" label="题目" width="180" />
    <el-table-column prop="class" label="类型" width="180" />
    <el-table-column prop="source" label="来源" />
    <el-table-column prop="teacher" label="指导教师" />
    <el-table-column prop="status" label="确认状态" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="example-pagination-block">
    <div class="example-demonstration">翻页</div>
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 30px;
}
.belongto{
  margin-left: 50px;
}
.table1 {
  margin-bottom: 50px;
}
.condition{
  border:1px solid  #b1b3b8;
  margin-right: 20px;
  margin-bottom: 30px;
}
.el-select{
  margin-top: 30px;
}
.search{
  margin-left: 500px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
