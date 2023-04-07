<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">发布公告</span>
    </div>
    <el-input class="input" v-model="textarea" :rows="10" type="textarea" placeholder="请输入公告内容" />
    <el-upload
    class="upload"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <el-icon class="el-icon--upload"><IEpupload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽上传或<em>点击此处</em>
    </div>
  </el-upload>
  <div class="submit">
    <el-button   type="primary">提交</el-button>
  </div>
  
</template>

<style scoped>
.title {
    margin-top: 30px;
    margin-bottom: 30px;
}
.input{
    width:60%;
    margin-left: 200px;
    margin-bottom: 50px;

}
.upload{
    margin-left: 370px;
}
.submit
{
    margin-left: 530px;
    margin-top: 30px;
}
</style>
