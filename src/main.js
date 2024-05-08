import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import Vue3Marquee from 'vue3-marquee'
// import 'vue3-marquee/dist/style.css'
import store from './store'
import { message } from './utils/prompt'

const app = createApp(App)

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

app.config.globalProperties.$message = message;
app.use(router)
app.use(store)
app.use(Vue3Marquee)
app.mount('#app')
