import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import Vue3Marquee from 'vue3-marquee'
// import 'vue3-marquee/dist/style.css'
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(Vue3Marquee)
app.mount('#app')
