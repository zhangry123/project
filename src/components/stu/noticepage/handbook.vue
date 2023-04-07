<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'
</script>

<template>
     <div>
        <h2 class="title">操作手册（教师、学生、系主任、管理员）</h2>
        <span class="time">发布时间：2023-04-03-12:00</span>
        <el-divider border-style="double" />
        <span>请查看操作手册。</span>
        <br /><br />
        <el-link :icon="Download" style="color:brown;" href="https://pan.baidu.com/s/1ng4y1MJ8HfzZNnfae7bhZw">操作手册（教师、学生、系主任、管理员）.rar</el-link>
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
}</style>
