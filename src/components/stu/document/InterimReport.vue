<template>
  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">中期报告详情</span>
  </div>

  <div class="form">
    <el-form class="demo-form-top">
      <el-form-item>
        <toastui-editor ref="refToastuiEditor" id="ToastuiEditor1" style="width: 1000px"></toastui-editor>
      </el-form-item>
    </el-form>
    <div class="dialog-from-button">
      <el-button size="small" type="info">清空</el-button>
      <el-button type="primary" size="small" @click="fromSubmit()">提交</el-button>
    </div>

    <el-upload v-model:file-list="fileList" class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple :on-preview="handlePreview"
      :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed">
      <el-button type="primary">上传</el-button>
      <template #tip>
        <div class="el-upload__tip">
          请点击这里上传附件
        </div>
      </template>
    </el-upload>
  </div>

  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">中期报告审核结果</span>
  </div>
  <el-table :data="tableData" border style="width: 70%">
    <el-table-column prop="items" label="审核项" />
    <el-table-column prop="teacher" label="审核人" />
    <el-table-column prop="date" label="审核时间" />
    <el-table-column prop="result" label="审核结果" />
    <el-table-column prop="content" label="审核内容" />
  </el-table>
</template>
  
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref
} from 'vue'
//引入封装的组件

import ToastuiEditor from '@/components/editor.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: { ToastuiEditor },
  setup() {
    const formDialogCommon = reactive({
      richText: '',
    })
    const refToastuiEditor = ref()
    // 编辑
    const compileClick = async (v: any) => {
      if (v.showText) {
        refToastuiEditor.value.setHTML(v.showText)
        //用于数据回显 （v.showText表示需要回显的数据）
      }
    }
    // 确认
    const fromSubmit = () => {
      const richTextHtml: string = refToastuiEditor.value.getHTML()
      formDialogCommon.richText = richTextHtml
      // 获取到数据 formDialogCommon.richText 用于传递给接口
    }
    const tableData = [
      {
        items: '指导教师审核',
        teacher: '王玉文',
        date: '2022-10-04-10:11',
        result: '审核通过',
        content: '同意开题'
      },
    ]

    const fileList = ref<UploadUserFile[]>([
      {
        name: 'element-plus-logo.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
      },
      {
        name: 'element-plus-logo2.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
      },
    ])

    const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
      console.log(file, uploadFiles)
    }

    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      console.log(uploadFile)
    }

    const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
      ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
      )
    }

    const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
      return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
      ).then(
        () => true,
        () => false
      )
    }
    return {
      refToastuiEditor,
      fromSubmit,
      compileClick,
      tableData,
      fileList,
      handleRemove,
      handlePreview,
      handleExceed,
      beforeRemove
    }
  }
})



</script>
<style scoped>
.dialog-from-button {
  margin-left: 400px;
}

.title {
  margin-bottom: 30px;
  margin-top: 30px;

}

.form {
  margin-left: 70px;
}
</style>
  
  
  
  
  