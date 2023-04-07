<script setup lang="ts">
import router from '@/router';

const handleClick = (Index: number) => {
    if (Index === 0) {
        router.push('/assignment')
    }
    if (Index === 1) {
        router.push('/openingReport')
    }
    if (Index === 2) {
        router.push('/interimReportt')
    }
    if (Index === 3) {
        router.push('/dissertation')
    }
}

const tableData = [

    {
        document: '任务书',
        commitStatus: '已提交',
        audiStatus: '审核通过',
    },
    {
        document: '开题报告',
        commitStatus: '已提交',
        audiStatus: '审核通过',
    },
    {
        document: '中期检查',
        commitStatus: '未提交',
        audiStatus: '未审核',
    },
    {
        document: '毕设论文',
        commitStatus: '未提交',
        audiStatus: '未审核',
    },
]
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">过程文档信息</span>
    </div>
    <el-table :data="tableData" border style="width: 700px" class="table" type="index" row-class-name="tableRowClassName">
        <el-table-column prop="document" label="过程文档" width="180" />
        <el-table-column prop="commitStatus" label="提交状态" width="180" />
        <el-table-column prop="audiStatus" label="审核状态" />
        <el-table-column prop="operation" label="操作">
            <template v-slot="scope">
                <el-button link type="primary" size="small" @click="handleClick(scope.$index)">查看详情</el-button>
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