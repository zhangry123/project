import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import * as ECharts from 'echarts'
 

 


// import 'element-ui/lib/theme-chalk/index.css';

//import './assets/main.css'




const app = createApp(App)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$ECharts = ECharts
app.mount('#app')
