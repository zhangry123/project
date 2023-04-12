<script setup lang="ts">
import { ref } from "vue";
import { isCollapse } from "./isCollapse"
import { logoTextShow } from "./logoTextShow"
import router from "@/router";
const handleCommand = (command: string | number | object) => {
    if (command === "1") {
        router.push('/publishNotice')
    }
    if (command === "2") {
        router.push('/processOpreportn')
    }
    if (command === "3") {
        router.push('/auditTitle')
    }
    
}
</script>
<template>
    <el-aside>
        <a href="/" class="logo">
            <img src="@/assets/山大校徽.jpg" alt="">
            <a v-show="logoTextShow">毕业设计(论文)系统</a>
        </a>
        <el-menu router el-dropdown-link :collapse="isCollapse" @command="handleCommand">

            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <IEpBell />
                    </el-icon> <span> 发布管理 </span>
                </template>
                <el-menu-item index="/publishNotices" command="1">
                    <el-icon>
                        <IEpCalendar />
                    </el-icon>
                    <span>发布答辩安排</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <IEpConnection />
                    </el-icon> <span> 评估管理 </span>
                </template>
                <el-menu-item index="/auditTitle" command="3">
                    <el-icon>
                        <IEpDocumentChecked />
                    </el-icon>
                    <span>审核题目</span>
                </el-menu-item>
                <el-menu-item index="/processOpreportDean" command="2">
                    <el-icon>
                        <IEpDocumentChecked />
                    </el-icon>
                    <span>评估开题报告</span>
                </el-menu-item>
                
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
    background-color: #eee;
    height: 100vh;
    width: auto;
}

.el-menu {

    background-color: #eee;
    border-right: none;
    width: 250px;

    &.el-menu--collapse {
        width: 60px;
    }
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    text-decoration: none;
    color: black;

    img {
        width: 50px;
        margin-right: 5px;
    }
}</style>
