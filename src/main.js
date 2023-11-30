import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

const app = createApp(App);

//安装vue-router
app.use(router);

app.mount('#app')