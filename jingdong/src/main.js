import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' //移动端浏览器的适配
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')
