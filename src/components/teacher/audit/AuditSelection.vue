<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: '张润玉',
    title: '毕业设计系统',
    teacher: '王文玉',
  },
  {
    date: '2016-05-03',
    name: '张安森',
    title: '毕业设计系统',
    teacher: '王文玉',
  },
  ]
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">待审申请</span>
    </div>

    <el-table :data="tableData" style="width:800px;margin-left:30px;" highlight-current-row >
        <el-table-column type="index"/>
        <el-table-column  prop="date" label="日期" width="150" />
        <el-table-column prop="name" label="学生姓名" width="120" />
        <el-table-column prop="title" label="选择题目" width="200" />
        <el-table-column prop="teacher" label="指导教师" width="120" />
        <el-table-column label="操作" width="120">
            <template #default="scope">
                <el-button size="small" type="success"  style="display: block;margin: auto;margin-bottom: 10px;margin-left: 0%;">通过</el-button>
                <el-button size="small" type="danger"  style="display: block;margin: auto;margin-bottom: 10px;margin-left: 0%;">不通过</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
.title {
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>
