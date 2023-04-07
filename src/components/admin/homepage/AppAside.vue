<script setup lang="ts">
import { ref } from "vue";
import {isCollapse} from "./isCollapse"
import {logoTextShow} from "./logoTextShow"
import router from "@/router";
const handleCommand = (command: string | number | object) => {
    if(command==="1"){
        router.push('/statistics')
    }
    if(command==="2"){
        router.push('/userAdmin')
    }
}
</script>
<template>
    <el-aside >
        <a href="/stuhome" class="logo">
            <img src="@/assets/山大校徽.jpg" alt="">
            <a  v-show="logoTextShow">毕业设计(论文)系统</a>
        </a>
        <el-menu router el-dropdown-link :collapse="isCollapse" @command="handleCommand">
            
            <el-sub-menu index="1">
                <template #title>
                    <el-icon> <IEpDataBoard/></el-icon> <span> 统计管理 </span>
                </template>
                <el-menu-item index="/statistics" command="1">
                    <el-icon> <IEpDataAnalysis/> </el-icon>
                    <span>毕设统计与汇总</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon> <IEpUser/></el-icon> <span> 用户管理 </span>
                </template>
                <el-menu-item index="/userAdmin" command="2">
                    <el-icon> <IEpUser/> </el-icon>
                    <span>用户操作</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside{
    background-color: #eee;
    height:100vh;
    width: auto;
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
