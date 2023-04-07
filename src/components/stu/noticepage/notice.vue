<script setup lang="ts">

</script>

<template>
    <div class="notice">
        <h1 class="title">通知公告</h1>
        <el-divider border-style="double" />
        <el-icon>
            <IEpBell />
        </el-icon>
        <el-link href="http://localhost:5173/notice/submitDoccumentTime" target="_blank">关于毕业设计过程文档提交时间具体安排</el-link>
        <br /><br />
        <el-icon>
            <IEpBell />
        </el-icon>
        <el-link href="http://localhost:5173/defenseArrangements" target="_blank">关于毕业设计答辩时间具体安排</el-link>
    </div>
</template>

<style scoped>
.notice {
    border: 1px solid #000;
    height: 400px;
    margin-right: 35px;
    margin-left: 20px;

}

.title {
    text-align: center;
    margin-top: 10px;
}

.el-icon {
    margin-left: 10px;
    margin-right: 10px;
}
</style>

