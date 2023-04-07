<script setup lang="ts">
import { Lock, Timer, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
interface User {
    user: string,
    name: string,
    role: string,
    school: string,
    email: string,
    phone: string
}
const now = new Date()

const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    tableData.value.splice(index, 1)
}

const tableData = ref([
    {
        user: 'zry',
        name: '张润玉',
        role: '学生',
        school: '机电学院',
        email: '7165584@qq.com',
        phone: '1886383783'

    },
])

</script>

<template>
    <div class="title">
        <el-icon>
            <IEpCaretRight />
        </el-icon>
        <span style="font-weight:bold">用户操作</span>
    </div>
    <div style="text-align: center;margin-bottom: 50px;">
        <span>请输入用户名查询：</span>
        <el-input v-model="input" class="w-50 m-2" placeholder="例如：zry" :prefix-icon="Search" style="width: 300px;" />
    </div>
    <div class="table">
        <el-table :data="tableData" highlight-current-row >
            <el-table-column type="index" />
            <el-table-column label="账户" style="margin-left: 0%;">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <User />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.user }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="姓名">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>name: {{ scope.row.name }}</div>
                        </template>
                        <template #reference>
                            <el-tag>{{ scope.row.name }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="角色">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.role }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="所属院系">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.school }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="电子邮箱">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.email }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="联系电话">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.phone }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <div class="button">
                        <el-button size="small" style="display: block;margin: auto;margin-bottom: 10px;margin-left: 0%;"
                            type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" style="display: block;margin: auto;margin-left: 0%;" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div class="add" >
        <el-popover placement="right" :width="400" trigger="click">
            <template #reference>
                <el-button style="margin-right: 16px">添加用户</el-button>
            </template>
        </el-popover>
    </div>
</template>

<style scoped>
.title {
    margin-top: 30px;
    margin-bottom: 30px;
}

.button {
    display: flex;
    flex-direction: column;
}


.add {
    margin-top: 30px;
    text-align: center;
}
</style>
