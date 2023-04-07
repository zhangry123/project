<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'
</script>

<template>
    <div>
        <h2 class="title">关于毕业设计过程文档提交时间具体安排</h2>
        <span class="time">发布时间：2023-04-03-12:00</span>
        <el-divider border-style="double" />
        <span>请查看关于毕业设计过程文档提交时间具体安排。</span>
        <br /><br />
        <el-link :icon="Download" style="color:brown;" href="https://pan.baidu.com/s/1MF6ub6I3a_7lX3RWHrp_5Q ">关于毕业设计过程文档提交时间具体安排.doc</el-link>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
}

.time {
    margin-top: 10px;
    text-align: center;
    display: block;
    color: dimgrey;
}
</style>
