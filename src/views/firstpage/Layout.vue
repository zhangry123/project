<script setup lang="ts">
import Main1 from "./Main1.vue"
import Main2 from "./Main2.vue"
</script>

<template>
    <div class="common-layout">
        <el-container>
            <Main1/>
            <Main2/>
        </el-container>
    </div>
</template>

<style scoped>
.el-container{
    flex-direction: column;
}
</style>
