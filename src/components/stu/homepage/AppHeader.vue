<script setup lang="ts">
import {logoTextShow} from "./logoTextShow"
import {isCollapse} from "./isCollapse"
import router from "@/router";

const handleCommand=(command: string | number | object)=>{
    if(command==="1"){
        router.push('/person')
    }
}
</script>

<template class="header">
    <el-header>
        <!-- 图标 -->
        <el-icon @click="isCollapse=!isCollapse,logoTextShow=!logoTextShow">
            <IEpExpand v-show="isCollapse"/>
            <IEpFold v-show="!isCollapse"/>
        </el-icon>
        
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/stuhome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">通知公告</a></el-breadcrumb-item>
            <!-- <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
        </el-breadcrumb>
        <!-- 下拉菜单 -->
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <el-avatar :size="32" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
                <span class="name">姓名</span>
                <el-icon class="el-icon--right">
                    <i-ep-arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu >
                    <el-dropdown-item command="1">个人中心</el-dropdown-item>
                    <el-dropdown-item divided command="2">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style scoped>
.el-header {
    display: flex;
    align-items: center;
    background-color: #dedfe0;

}

.el-icon {
    margin-right: 17px;
}

.el-dropdown {
    margin-left: auto;
    outline: none;
};
.el-dropdown-link:focus {
      outline: none;
    }

.el-avatar {
    margin-right: 10px;
}
</style>
