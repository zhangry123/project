<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue'
const input = ref('')
const size = ref('default')
const labelPosition = ref('right')

const ruleFormRef = ref<FormInstance>()

const Form1 = reactive({
    username: '',
    name: '',
    number: '',
    school: '',
    speciality: '',
    signature: '',
})

function onSubmit() {
    console.log('submit!')
}
const dialogVisible = ref(false)
const formLabelWidth = '140px'
const Form2 = reactive({
    username: "zry",
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
})
const validateOldPass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码不能为空！'))
    }
    else {
        if (value !== "123456") {
            callback(new Error("原始密码错误！"))
        } else {
            callback()
        }
    }
}



const validateNewPass = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error('密码不能为空！'))
    } else {
        if (Form2.confirmpassword !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('confirmpassword', () => null)
        }
    }
    var str = RegExp("^[A-Za-z0-9]{6,18}$")
    if (!str.test(value)) {
        callback(new Error('当前密码格式不正确!'))
    } else {
        callback()
    }
}
// 确认密码验证
const validateConfirmPass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码不能为空！'));
    } else if (value !== Form2.newpassword) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback()
    }
}
const rules = reactive({
    oldpassword: [{ validator: validateOldPass, trigger: "blur" }],
    newpassword: [{ validator: validateNewPass, trigger: 'blur' }],
    confirmpassword: [{ validator: validateConfirmPass, trigger: 'blur' }],
})
const onConfirm = async () => {
    await ruleFormRef.value?.validate().catch((err) => {
        alert("表单校验失败")
        throw err
    })
}

</script>

<template>
    <el-form class="form1" ref="form" :model="Form1" label-width="auto" :label-position="labelPosition">
        <span class="title">个人信息</span>
        <el-form-item label="用户名">
            <el-input disabled placeholder="zry" />
        </el-form-item>
        <el-form-item label="姓名">
            <el-input disabled placeholder="张润玉" />
        </el-form-item>
        <el-form-item label="学号">
            <el-input disabled placeholder="201900800081" />
        </el-form-item>

        <el-form-item label="学院">
            <el-input disabled placeholder="机电学院" />
        </el-form-item>
        <el-form-item label="专业">
            <el-input disabled placeholder="计算机合" />
        </el-form-item>
        <el-form-item label="电子签名">
            <el-input v-model="input" placeholder="此人很懒，什么都没有留下。" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">修改电子签名</el-button>
            <el-button @click="dialogVisible = true">
                修改密码
            </el-button>

            <el-dialog v-model="dialogVisible" title="修改密码">
                <el-form :model="Form2" class="form2" ref="ruleFormRef" :rules="rules">
                    <el-form-item label="用户名:" :label-width="formLabelWidth">
                        <el-input v-model="Form2.username" disabled />
                    </el-form-item>
                    <br />
                    <el-form-item label="原始密码:" :label-width="formLabelWidth" prop="oldpassword">
                        <el-input v-model="Form2.oldpassword" show-password placeholder="请输入原始密码" />
                    </el-form-item>
                    <br />
                    <el-form-item label="新密码:" :label-width="formLabelWidth" prop="newpassword">
                        <el-input v-model="Form2.newpassword" show-password placeholder="请输入6-18位新密码" />
                    </el-form-item>
                    <br />
                    <el-form-item label="确认密码:" :label-width="formLabelWidth" prop="confirmpassword">
                        <el-input v-model="Form2.confirmpassword" show-password placeholder="请再次输入更改后的密码" />
                    </el-form-item>
                    <br />
                </el-form>
                <template #footer>
                    <div class="dialog-button">
                        <el-button @click="dialogVisible = false">关闭</el-button>
                        <el-button type="primary" @click=onConfirm>
                            确认
                        </el-button>
                    </div>
                </template>
            </el-dialog>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.title {
    display: inline-block;
    text-align: center;
    width: 300px;
    margin-bottom: 30px;


}

.form1 {
    margin-left: 600px;
    margin-top: 150px;
}

.form2 {
    flex-wrap: wrap;
    gap: 8px;
    /*输入框周边空白，调整输入框间距*/
    width: 500px;
    margin-left: 100px;
}

.dialog-button {
    text-align: center;
    margin-bottom: 50px;
}
</style>
