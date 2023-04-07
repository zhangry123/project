<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const shortcuts = [
    {
        text: 'Today',
        value: new Date(),
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        },
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        },
    },
]

const value = ref('')

const options = [
    {
        value: 'Option1',
        label: '图西教学楼205',
    },
    {
        value: 'Option2',
        label: '图东教学楼205',
    },
    {
        value: 'Option3',
        label: '商学院253',
    },
    {
        value: 'Option4',
        label: '机电院507',
    },
    {
        value: 'Option5',
        label: '文学楼408',
    },
]
const input = ref('')
const input1 = ref('')
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">答辩安排信息发布</span>
    </div>
    <div class="select">
        <el-row :gutter="20">
        <div class="block">
            <span class="demonstration">答辩时间：</span>
            <el-date-picker v-model="value3" type="datetime" placeholder="请选择" :default-time="defaultTime" />
        </div>
        <div class="block1">
            <span class="position">答辩地点：</span>
            <el-select v-model="value" class="m-2" placeholder="请选择">

                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="block2">
            
                <span class="tag">参与教师：</span>
                <el-input v-model="input1" class="teacher" placeholder="姓名中间用逗号分隔"  />
        </div>
        
    </el-row>
    <el-row class="row1">
        <div class="block3">
            
            <span class="tag1">参与学生：</span>
            <el-input v-model="input1" class="student" placeholder="姓名中间用逗号分隔"  />
            <!-- <el-input v-model="input" placeholder="请输入教师姓名，中间用逗号分隔" /> -->
    </div>
    </el-row>
    

    </div>
    <div style="text-align:center"><el-button class="submit">提交</el-button></div>
    
</template>

<style scoped>
.title {
    margin-top: 30px;
    margin-bottom: 30px;
}

.select {
    border: 1px solid #000;
    margin-left: 30px;
    margin-right: 30px;
    width: auto;
    height: 200px;
}

.position {
    margin-right: 10px;
    margin-left: 20px;
}

.block {
    margin-top: 30px;
    margin-left: 20px;
    display: inline-block;
}

.block1 {
    margin-top: 30px;
    margin-left: 20px;
    display: inline-block;
}

.block2 {
    margin-top: 30px;
    margin-left: 20px;
    display: inline-block;
}
.teacher{
display: inline;
}
.tag{
    display: inline;
    margin-left: 20px;
}
.tag1{
    display: inline;
    margin-left: 10px;

}
.student{
    display: inline;
}
.row1{
    margin-top: 30px;
}
.demonstration {
    margin-right: 10px;

}
.submit{
    margin-top: 30px;
}
</style>
