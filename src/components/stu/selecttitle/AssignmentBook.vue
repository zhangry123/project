<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">任务书详情</span>
  </div>
  <span class="detail">古诗词作为我国特殊的文化底蕴，是人们争相学习与模仿的目标。为进一步提升人们对古诗词的热爱，深入了解古诗词的寓意，本文设计一种基于Transformer模型的古诗词填空系统以实现古诗词自动补充的功能。
    本课题的研究内容是基于transformer编码器-解码器等深度学习算法实现自动对古诗词中的空缺位置进行填充。</span>
  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">任务书审核情况</span>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 30px;
}

.detail {
  display: block;
  margin-bottom: 30px;
}

.el-input {
  width: 90%;
  height: 100px;
}
</style>
