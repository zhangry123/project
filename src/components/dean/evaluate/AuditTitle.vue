<script setup lang="ts">
import { ref } from 'vue';

const input=ref('')

const tableData=[
    {
        number:'648634',
        title:'毕业设计系统',
        teacher:'王文玉',
    },
    {
        number:'7864376',
        title:'酒店管理系统',
        teacher:'王文玉',
    },
]
</script>

<template>
    <div class="title" style="margin-top: 30px;margin-bottom: 30px;">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">待审核的题目</span>
    </div>
    
    <div class="box">
        <span style="margin-left: 30px;">指导教师：</span>
        <el-input class="input1" v-model="input"  placeholder="请输入" />
        <span style="margin-left: 30px;">题目编号：</span>
        <el-input class="input2" v-model="input"  placeholder="请输入" />
        <br/>
        <el-button type="primary" style="margin-left: 300px;margin-bottom: 10px;">查询</el-button>
    </div>

    <el-table :data="tableData" style="width:600px;margin-left:30px;" highlight-current-row>
        <el-table-column type="index" />
        <el-table-column prop="number" label="题目编号" width="150" />
        <el-table-column prop="title" label="题目名称" width="120" />
        <el-table-column prop="teacher" label="指导教师" width="120" />
        <el-table-column label="操作" width="120">
            <template #default="scope">
                <el-button size="small"
                    style="display: block;margin: auto;margin-left: 0%;">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>

</template>

<style scoped>
.box{
    border: 1px solid #000;
    margin-left: 30px;
    margin-right: 500px;
    margin-bottom: 30px;
}
.input1{
width: 200px;
margin-bottom: 20px;
margin-top: 20px
}
.input2{
width: 200px;
}
</style>
