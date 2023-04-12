<script setup lang="ts">
import { ref } from 'vue'



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
const options = [
    {
        value: '1',
        label: '通过',
    },
    {
        value: '0',
        label: '未通过',
    },
]

const input = ref('')
const value = ref('')
const textarea = ref('')
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">待审毕业论文</span>
    </div>

    <el-table :data="tableData" style="width:800px;margin-left:30px;" highlight-current-row>
        <el-table-column type="index" />
        <el-table-column prop="date" label="提交日期" width="150" />
        <el-table-column prop="name" label="学生姓名" width="120" />
        <el-table-column prop="title" label="题目" width="200" />
        <el-table-column prop="teacher" label="指导教师" width="120" />
        <el-table-column label="操作" width="120">
            <template #default="scope">
                <el-button size="small"
                    style="display: block;margin: auto;margin-bottom: 10px;margin-left: 0%;">查看详情</el-button>
                <el-button size="small" type="primary"
                    style="display: block;margin: auto;margin-bottom: 10px;margin-left: 0%;">点击审核</el-button>
            </template>
        </el-table-column>
    </el-table>

    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">当前审核毕业论文信息</span>
    </div>
    <div class="box1">
        <span style="margin-left: 30px;">
            审核题目：
        </span>
        <el-input class="input1" v-model="input" disabled placeholder="毕业设计系统" />
        <span>
            学生姓名：
        </span>
        <el-input class="input2" v-model="input" disabled placeholder="张润玉" />
    </div>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">审核内容</span>
    </div>
    <div class="box2">
        <span >审核状态：</span>
        <el-select v-model="value" class="m-2" placeholder="请选择" style="margin-bottom: 30px;">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <br/>
        <span>审核意见：</span>
        <br/>
        <el-input class="input3" v-model="textarea" maxlength="100" placeholder="请输入" show-word-limit type="textarea" />
        <br/>
        <el-button type="primary" style="margin-top: 20px;margin-left: 300px;">提交</el-button>
    </div>
</template>


<style scoped>
.title {
    margin-bottom: 30px;
    margin-top: 30px;
}

.box1 {
    border: 1px solid #000;
    margin-left: 30px;
    margin-right: 300px;

}

.box2 {
    margin-left: 30px;
}

.input1 {
    width: 400px;
    margin-right: 30px;
    margin-bottom: 30px;
    margin-top: 30px;
}

.input2 {
    width: 100px;
}
.input3{
margin-top: 10px;
width: 600px;
}
</style>
