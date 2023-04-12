<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref('')
const value2 = ref('')
const input = ref('')
const num = ref(100)

const options = [
    {
        value: '1',
        label: '图西教学楼',
    },
    {
        value: '2',
        label: '图东教学楼',
    },
]
const tableData = [
    {
        date: '2016-05-03',
        place:'图西教学楼',
        stu: '张润玉',
        title: '毕业设计系统',
        grade:90,
    },
    {
        date: '2016-05-03',
        place:'图西教学楼',
        stu: '张安森',
        title: '毕业设计系统',
        grade:90,
    },
]
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">填写答辩记录</span>
    </div>

    <div class="box1">
        <div class="time">
            <span style="margin-left: 30px;">时间：</span>
            <el-date-picker v-model="value1" type="datetime" placeholder="请选择" />
        </div>
        <div style="margin-top: 20px;">
            <span style="margin-left: 30px;">地点：</span>
            <el-select v-model="value2" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin-left: 30px;">答辩人：</span>
            <el-input v-model="input" placeholder="请输入" style="width: 200px;" />
            <span style="margin-left: 30px;">答辩成绩：</span>
            <el-input-number v-model="num" :min="0" :max="100" :step="5" />
        </div>
        <el-button type="primary" style="margin-left: 450px;margin-top: 30px;">提交</el-button>
    </div>

    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">已填写的答辩记录</span>
    </div>

    <el-table :data="tableData" style="width:1200px;margin-left:30px;" highlight-current-row>
        <el-table-column type="index" />
        <el-table-column prop="date" label="答辩日期" width="150" />
        <el-table-column prop="place" label="答辩地点" width="150" />
        <el-table-column prop="stu" label="答辩人" width="120" />
        <el-table-column prop="title" label="答辩题目" width="200" />
        <el-table-column prop="grade" label="答辩成绩" width="120" />
        <el-table-column fixed="right" label="操作" width="120">
            <template #default>
                <el-button link type="primary" size="small" style="display: block;margin: auto;margin-bottom: 10px;margin-left: 0%;">编辑</el-button>
                <el-button link type="danger" size="small" style="display: block;margin: auto;margin-left: 0%;">删除</el-button>
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
