<script setup lang="ts">
import AppAside from "./AppAside.vue"
import AppHeader from "./AppHeader.vue"
</script>

<template>
    <div class="common-layout">
        <el-container>
            <AppAside/>
            <el-container class="header-and-main">
                <AppHeader/>
                <el-scrollbar>
                    <RouterView/>
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.header-and-main{
    flex-direction: column;
}
</style>
