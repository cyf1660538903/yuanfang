import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '@/views/Msite/Msite'
import Search from '@/views/Search/Search'
import Order from '@/views/Order/Order'
import Profile from '@/views/Profile/Profile'
import Login from '@/views/Login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite,
    meta: { showFooter: true }
  },
  {
    path: '/search',
    component: Search,
    meta: { showFooter: true }
  },
  {
    path: '/order',
    component: Order,
    meta: { showFooter: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { showFooter: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { showFooter: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
