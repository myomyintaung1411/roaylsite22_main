import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import store from '@/store/index'
import { computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', 
  component: Home,
   meta: { title: 'Home',requireAuth: true } 
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   meta: { title: 'Login Section',requiresVisitor: true  },
  //   component: () => import('./views/Login.vue')
  // },
  // {
  //   path: '/about',
  //   meta: { title: 'About' },
  //   component: About,
  // },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//     const loginToken = computed(()=> store.getters["app/LoginToken"])
//      console.log(loginToken.value);
//     const token = loginToken.value
//     console.log(token,"router token");
//     if (to.matched.some(record => record.meta.requiresVisitor)
//     ) {
//       if (token) {
//         next('/')
//       } else {
//         next()
//       }
//     } else if (to.matched.some(record => record.meta.requireAuth)) {
//       if (!token) {
//         next('/login')
//       } else {
//         next()
//       }
//     } else {
//       next()
//     }
    
  
//   });


/* Default title tag */
const defaultDocumentTitle = '皇家娱乐'

router.afterEach(to => {
  /* Set document title from route meta */

  if (to.meta && to.meta.title) {
    document.title = `${defaultDocumentTitle} —  ${to.meta.title}`
  } else {
    document.title = defaultDocumentTitle
  }
})


export default router