<script setup lang="ts"  >
import { ref, reactive } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { login } from '@/api/users'
import type { ElMessage, FormInstance, FormRules } from 'element-plus';


const router = useRouter();
const loginModel = ref({
    username: "zry",
    password: "123456",
    radio: "",

});
const user = ref()
const getValue = (value: any) => {
    loginModel.value.radio = value
}
//定义表单校验规则
const rules = reactive<FormRules>({
    username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 16, message: "用户名长度需在3-16个字符", trigger: "change" }
    ],
    password: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 6, max: 18, message: "密码长度需在6-18个字符", trigger: "change" }
    ],
})
//定义是否登录加载中
const isLoading=ref(false)

const formRef = ref<FormInstance>()
const onSubmit = async () => {
    isLoading.value=true
    //表单校验
    await formRef.value?.validate().catch((err) => {
        alert("表单校验失败")
        isLoading.value=false
        throw err
    })
    //发送登录请求
    const data = await login(loginModel.value).then((res) => {
        console.log(res)
        if (!res.data.success) {
           alert("登录信息有误")
           isLoading.value=false
            //throw new Error("登录信息有误")
        }
        return res.data
    })
    isLoading.value=false
    // user.value = { id: 1, username: loginModel.value.username, password: loginModel.value.password, radio: loginModel.value.radio };

    // if (user.value.username === "zry" && user.value.password === "123456") {
    //     if (user.value.radio === 1) {
    //         router.push("/stuhome")
    //     }
    //     else if (user.value.radio === 2) {
    //         router.push("/teahome")
    //     }
    //     else if (user.value.radio === 3) {
    //         router.push("/deanhome")
    //     }
    //     else if (user.value.radio === 4) {
    //         router.push("/adminhome")
    //     } else {
    //         alert("请选择身份！")
    //     }
    // }
    // else {
    //     alert("账号或密码错误！")
    // }
}
</script>

<template>
    <div class="body">
        <div class="container">
            <div class="header">
                <h1>毕业设计系统</h1>
            </div>
            <div class="mb-2 flex items-center text-sm">
                <el-radio-group v-model="loginModel.radio" class="select" @change="getValue">
                    <el-radio :label="1" size="large">学生</el-radio>
                    <el-radio :label="2" size="large">教师</el-radio>
                    <el-radio :label="3" size="large">系主任</el-radio>
                    <el-radio :label="4" size="large">管理员</el-radio>
                </el-radio-group>
            </div>
            <div class="main">
                <el-form @click.prevent="" class="form" :rules="rules" ref="formRef" :model="loginModel">
                    <el-form-item prop="username">
                        <el-input type="text" placeholder="账号" v-model="loginModel.username" :prefix-icon="User" />
                    </el-form-item>
                    <br />
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginModel.password" show-password
                            :prefix-icon="Lock" />
                    </el-form-item>
                    <br />
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" :loading="isLoading">登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<style scoped>
.body {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(src/assets/山东大学威海.jpg);
    background-size: cover;
}

.container {
    width: 380px;
    margin: 7% auto;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 20px #333;
    text-align: center;
}

.select {
    margin-bottom: 30px;
}

.el-radio {
    color: #000;
}

.header {
    text-align: center;
    padding-top: 75px;
}

.header h1 {
    color: #080808;
    font-size: 45px;
    margin-bottom: 50px;
}

.main {
    text-align: center;
}

.main input,
button {
    width: 300px;
    height: 40px;
    border: none;
    outline: none;
    padding-left: 40px;
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    margin-bottom: 40px;
}

.el-button {
    padding-left: 0;
    background-color: #83acf1;
    letter-spacing: 1px;
    font-weight: bold;
    margin-bottom: 70px;
}

.el-button:hover {
    box-shadow: 2px 2px 5px #555;
    background-color: #7799d4;
}

.el-input {
    box-shadow: 2px 2px 5px #555;
    background-color: #ddd;
    width: 320px;
    height: 40px;
    margin-bottom: 30px;
}

.main span {
    position: relative;

}

.main i {
    position: absolute;
    left: 15px;
    color: #333;
    font-size: 16px;
    top: 2px;
}

.form {
    margin-left: 30px;
}
</style> 
