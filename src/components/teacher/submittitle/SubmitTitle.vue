<script lang="ts">
import ToastuiEditor from '@/components/editor.vue'
import type { UploadUserFile, UploadProps } from 'element-plus'
import {
    defineComponent,
    reactive,
    ref
} from 'vue'



//引入封装的组件


const formDialogCommon = reactive({
    richText: '',
})
export default defineComponent({
    name: 'App',
    components: { ToastuiEditor },
    setup() {
        const form = reactive({
            title: '',
            collage: '',
            type: '',
            source: '',
            teacher: ''
        })
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
                teacher: '王玉文',
                date: '2022-10-04-10:11',
                result: '审核通过',
                content: '同意'
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
                `是否删除文件 ${uploadFile.name} ?`
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
            beforeRemove,
            form

        }
    }
})

</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">题目基本信息</span>
    </div>
    <el-form :model="form" label-width="120px" :inline="true">
        <el-form-item label="题目：">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="指导教师：">
            <el-input v-model="form.teacher" />
        </el-form-item>
        <el-form-item label="可选专业：">
            <el-select v-model="form.collage" placeholder="请选择">
                <el-option label="机电与信息工程学院（计算机合）" value="机电与信息工程学院（计算机合）" />
                <el-option label="机电与信息工程学院（未来网络）" value="机电与信息工程学院（未来网络）" />
            </el-select>
        </el-form-item>
        <el-form-item label="题目类型：">
            <el-select v-model="form.type" placeholder="请选择">
                <el-option label="应用型课题" value="应用型课题" />
                <el-option label="理论型课题" value="理论型课题" />
            </el-select>
        </el-form-item>
        <el-form-item label="题目来源：">
            <el-select v-model="form.source" placeholder="请选择">
                <el-option label="企事业单位委托课题" value="企事业单位委托课题" />
                <el-option label="自拟题目" value="自拟题目" />
                <el-option label="教研室题目" value="教研室题目" />
            </el-select>
        </el-form-item>
    </el-form>

    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">题目详情</span>
    </div>
    <div class="editor">
        <el-form class="demo-form-top">
            <el-form-item>
                <toastui-editor ref="refToastuiEditor" id="ToastuiEditor1" style="width: 1000px"></toastui-editor>
            </el-form-item>
        </el-form>
        <div class="dialog-from-button">
            <el-button size="small" type="info">清空</el-button>
            <el-button type="primary" size="small" @click="fromSubmit()">提交</el-button>
        </div>
        <div class="upload">
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

    </div>

    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">题目审核状态</span>
    </div>
    <el-table :data="tableData" border style="width: 70%;margin-left: 30px;">
        <el-table-column prop="teacher" label="审核人" />
        <el-table-column prop="date" label="审核时间" />
        <el-table-column prop="result" label="审核结果" />
        <el-table-column prop="content" label="审核内容" />
    </el-table>
</template>

<style scoped>
.title {
    margin-top: 30px;
    margin-bottom: 30px;
}

.editor {
    margin-left: 30px;
}

.dialog-from-button {
    margin-bottom: 30px;
    margin-left: 500px;
    margin-top: 30px;
}
</style>
