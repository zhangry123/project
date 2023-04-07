<script setup lang="ts">

</script>

<template>
    <div class="title">
        <el-icon><IEpCaretRight /></el-icon>
        <span style="font-weight:bold">我的题目</span>
    </div>
    <div class="main">
        <br/><br/>
        <span class="span1">题目：</span>
        <span class="span2">毕业管理系统的设计与实现</span>
        <br/><br/>
        <span class="span3">审核状态：</span>
        <span  class="span4">审核通过，指导教师确认通过学生选题</span>
        <br/><br/><br/>
    </div>
</template>

<style scoped>
.title{
   margin-bottom: 30px; 
}
.main{
    margin-right: 20px;
    border:1px solid  #b1b3b8;

}
.span1,.span3{
    color:   #73767a;
    padding-left: 30px;
}
.span4{
    color:  #529b2e;
}

</style>
