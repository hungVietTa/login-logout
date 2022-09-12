import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { store } from '../main.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/register',
    name: 'resgister',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.path === '/login' && store.state.loginState)
//     next('/')
// })

export default router
