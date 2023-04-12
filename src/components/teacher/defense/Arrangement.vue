<script setup lang="ts">
const tableData = [
  {
    topic: '毕业设计系统',
    time: '2022-10-04-10:11',
    place: '图东教学楼205',
    teacher:'王玉文',
    student:'张三'
  },
  
]
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">答辩安排信息</span>
    </div>
    <el-table :data="tableData" border style="width: 70%">
      <el-table-column prop="topic" label="题目"  />
      <el-table-column prop="time" label="答辩时间"  />
      <el-table-column prop="place" label="答辩地点" />
      <el-table-column prop="teacher" label="参与教师" />
      <el-table-column prop="student" label="参与学生" />
    </el-table>
</template>

<style scoped>
.title {
  margin-bottom: 30px;
  margin-top: 30px;

}</style>
