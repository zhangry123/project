<script setup lang="ts">
import { title } from 'process';

const tableDataOne = [
    {
        number: '787678',
        title: '毕业设计系统',
        teacher: '王文玉',
        dean: '张三',
        status: '未审核',
    },
    {
        number: '773978',
        title: '酒店管理系统',
        teacher: '王文玉',
        dean: '张三',
        status: '审核通过'
    }
]
const tableDataTwo =[
    {
        item:'开题报告',
        title:'毕业设计系统',
        stuname:'张润玉',
    },
    {
        item:'中期报告',
        title:'毕业设计系统',
        stuname:'张润玉',
    }
]
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">我的题目申报</span>
    </div>

    <el-table :data="tableDataOne" border highlight-current-row style="width: 1000px;margin-left: 30px;">
        <el-table-column type="index" width="50" />
        <el-table-column prop="number" label="题目编号" width="180" />
        <el-table-column prop="title" label="题目名称" width="280" />
        <el-table-column prop="teacher" label="指导教师" width="180" />
        <el-table-column prop="dean" label="审核人" width="180" />
        <el-table-column prop="status" label="审核状态" width="180" />
    </el-table>

    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">我的待审核项</span>
    </div>
    <el-table :data="tableDataTwo" border highlight-current-row style="width: 900px;margin-left: 30px;">
        <el-table-column type="index" width="50" />
        <el-table-column prop="item" label="待审核项" width="180" />
        <el-table-column prop="title" label="题目名称" width="280" />
        <el-table-column prop="stuname" label="学生姓名" width="180" />
        <el-table-column label="操作">
            <template #default="scope">
                <el-button size="small" type="primary">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
.title {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
