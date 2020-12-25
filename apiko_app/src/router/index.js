import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/account',
    name: 'Account',
    redirect: '/account/login',
    children: [
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/Register')
      },
      {
        path: 'login',
        name: 'Log_In',
        component: () => import('../views/Log_In')
      },
    ],
    component: () => import('../views/Account')
  },

  {
    path: '/create',
    name: 'New_Products',

    component: () => import('../views/New_Products')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
