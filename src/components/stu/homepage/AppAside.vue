<script setup lang="ts">
import { ref } from "vue";
import {isCollapse} from "./isCollapse"
import {logoTextShow} from "./logoTextShow"
import router from "@/router";
const handleCommand = (command: string | number | object) => {
    if(command==="1"){
        router.push('/notice')
    }
    if(command==="2"){
        router.push('/handbook')
    }
    if(command==="3"){
        router.push('/choiceTitle')
    }
    if(command==="4"){
        router.push('/assignment')
    }
    if(command==="5"){
        router.push('/openingReport')
    }
    if(command==="6"){
        router.push('/interimReport')
    }
    if(command==="7"){
        router.push('/dissertation')
    }
    if(command==="8"){
        router.push('/stuArrangements')
    }
    if(command==="9"){
        router.push('/defenseRecord')
    }
}
</script>
<template>
    <el-aside >
        <a href="/" class="logo">
            <img src="@/assets/山大校徽.jpg" alt="">
            <a  v-show="logoTextShow">毕业设计(论文)系统</a>
        </a>
        <el-menu router el-dropdown-link unique-opened :collapse="isCollapse" @command="handleCommand" >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon> <IEpBell/></el-icon> <span> 通知管理 </span>
                </template>
                <el-menu-item index="/notice" command="1">
                    <el-icon> <IEpBell/> </el-icon>
                    <span>通知公告</span>
                </el-menu-item>
                <el-menu-item index="/handbook" command="2">
                    <el-icon> <IEpDocument/> </el-icon>
                    <span>操作手册</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon> <IEpConnection/></el-icon> <span> 选题管理 </span>
                </template>
                <el-menu-item index="/choiceTitle" command="3">
                    <el-icon> <IEpSwitch/> </el-icon>
                    <span>学生选题</span>
                </el-menu-item>
                <el-menu-item index="/assignment" command="4">
                    <el-icon> <IEpNotebook/> </el-icon>
                    <span>任务书</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <el-icon> <IEpDocumentCopy/></el-icon> <span> 过程文档管理 </span>
                </template>
                <el-menu-item index="/openingReport" command="5">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>提交开题报告</span>
                </el-menu-item>
                <el-menu-item index="/interimReport" command="6">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>提交中期报告</span>
                </el-menu-item>
                <el-menu-item index="/dissertation" command="7">
                    <el-icon> <IEpDocumentChecked/> </el-icon>
                    <span>提交毕业论文</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
                <template #title>
                    <el-icon> <IEpChatDotRound /></el-icon> <span> 答辩管理 </span>
                </template>
                <el-menu-item index="/stuArrangements" command="8">
                    <el-icon> <IEpCalendar/> </el-icon>
                    <span>答辩安排信息</span>
                </el-menu-item>
                <el-menu-item index="/record" command="9">
                    <el-icon> <IEpEditPen/> </el-icon>
                    <span>答辩记录</span>
                </el-menu-item>
            </el-sub-menu>

        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside{
    background-color: #e9e9eb;
    height:100vh;
    width: auto;
}
.el-menu{

    background-color:  #e9e9eb;
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
