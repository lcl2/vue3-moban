<template>
    <el-form :model="form" :rules="formRules" ref="myForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <!-- 其他表单项 -->
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

// 创建 reactive 或 ref 表单数据
const form = reactive({
    username: '',
    password: ''
    // 其他表单项的数据
});

// 表单验证规则
const formRules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
        // 其他验证规则
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
        // 其他验证规则
    ]
    // 其他表单项的验证规则
};

// 重置表单数据
const resetForm = () => {
    Object.assign(form, resetValues(form));
};

// 重置所有表单项的值为空字符串
const resetValues = (data) => {
    const newData = {};
    for (const [key, value] of Object.entries(data)) {
        newData[key] = '';
    }
    return newData;
};

// 提交表单的逻辑
const submitForm = () => {
    // ...
};

</script>