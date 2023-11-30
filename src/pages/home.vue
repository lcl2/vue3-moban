<template>
    <el-form :model="form" :rules="formRules" @submit.prevent="submitForm" ref="myForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const form = reactive({
    username: '',
    password: ''
    // 其他表单项的数据
});
// const form = ref({
//     username: '',
//     password: ''
//     // 其他表单项的数据
// });

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

const submitForm = async () => {
    const isValid = await validateForm();

    if (isValid) {
        // 当表单验证通过时执行的逻辑，例如提交表单数据等
        console.log('表单验证通过');
    } else {
        // 当表单验证不通过时执行的逻辑
        console.log('表单验证不通过');
        return false; // 阻止表单提交
    }
};

const validateForm = async () => {
    const fields = Object.keys(form.value);
    for (const field of fields) {
        const rules = formRules[field];
        if (rules) {
            for (const rule of rules) {
                if (rule.required && !form.value[field]) {
                    return false; // 如果某个字段未通过验证则返回 false
                }
            }
        }
    }
    return true; // 如果所有字段都通过验证则返回 true
};


//通过element-plus的resetFields api来重置表单
// 表单实例引用
const myForm = ref(null);
// 重置表单数据
const resetForm = () => {
    myForm.value.resetFields();
};



// 手写重置

// // 重置表单数据
// const resetForm = () => {
//     Object.assign(form, resetValues(form));//重置reactive
//     // form.value = resetValues(form.value);//重置ref
// };

// // 重置所有表单项的值为空字符串
// const resetValues = (data) => {
//     const newData = {};
//     // for (const [key, value] of Object.entries(data)) {
//     //   newData[key] = '';
//     // }
//     Object.keys(data).forEach(key => {
//         newData[key] = '';
//     });
//     return newData;
// };

</script>
  