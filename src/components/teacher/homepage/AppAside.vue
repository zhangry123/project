<script setup lang="ts">
import {isCollapse} from "./isCollapse"
import {logoTextShow} from "./logoTextShow"
import router from "@/router";
const handleCommand = (command: string | number | object) => {
    if(command==="1"){
        router.push('/publishNotice')
    }
    if(command==="2"){
        router.push('/submitAssignment')
    }
    if(command==="3"){
        router.push('/submitTitle')
    }
    if(command==="4"){
        router.push('/processSelect')
    }
    if(command==="5"){
        router.push('/processRevise')
    }
    if(command==="6"){
        router.push('/processOpreport')
    }
    if(command==="7"){
        router.push('/processImReport')
    }
    if(command==="8"){
        router.push('/processDissertation')
    }
    if(command==="9"){
        router.push('/defenseArrangements')
    }
    if(command==="10"){
        router.push('/defenseRecord')
    }
}
</script>
<template>
    <el-aside >
        <a href="/teahome" class="logo">
            <img src="@/assets/山大校徽.jpg" alt="">
            <a  v-show="logoTextShow">毕业设计(论文)系统</a>
        </a>
        <el-menu router el-dropdown-link :collapse="isCollapse" @command="handleCommand" unique-opened>
            
            <el-sub-menu index="1">
                <template #title>
                    <el-icon> <IEpBell/></el-icon> <span> 发布管理 </span>
                </template>
                <el-menu-item index="/publishNotice" command="1">
                    <el-icon> <IEpChatLineSquare/> </el-icon>
                    <span>发布公告</span>
                </el-menu-item>
                <el-menu-item index="/submitAssignment" command="2">
                    <el-icon> <IEpNotebook/> </el-icon>
                    <span>发布任务书</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon> <IEpConnection/></el-icon> <span> 申报管理 </span>
                </template>
                <el-menu-item index="/submitTitle" command="3">
                    <el-icon> <IEpDocumentAdd/> </el-icon>
                    <span>申报题目</span>
                </el-menu-item>
                
                
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <el-icon> <IEpDocumentCopy/></el-icon> <span> 审核管理 </span>
                </template>
                <el-menu-item index="/processSelect" command="4">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>审核选题</span>
                </el-menu-item>
                <el-menu-item index="/processRevise" command="5">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>审核修改选题</span>
                </el-menu-item>
                <el-menu-item index="/processOpreport" command="6">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>审核开题报告</span>
                </el-menu-item>
                <el-menu-item index="/processImReport" command="7">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>审核中期报告</span>
                </el-menu-item>
                <el-menu-item index="/processDissertation" command="8">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>审核毕业论文</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
                <template #title>
                    <el-icon> <IEpChatDotRound /></el-icon> <span> 答辩管理 </span>
                </template>
                <el-menu-item index="/teaArrangements" command="9">
                    <el-icon> <IEpCalendar/> </el-icon>
                    <span>答辩安排信息</span>
                </el-menu-item>
                <el-menu-item index="/defenseRecord" command="10">
                    <el-icon> <IEpEditPen/> </el-icon>
                    <span>答辩记录填写</span>
                </el-menu-item>
            </el-sub-menu>

        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside{
    background-color: #eee;
    height:100vh;
    width: 250px;
}
.el-menu{

    background-color: #eee;
    border-right:none;
    width:250px;
    &.el-menu--collapse{
        width: 60px;
    }
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    text-decoration: none;
    color: black;  
    img{
        width: 50px;
        margin-right: 5px;
    }  
}


</style>
