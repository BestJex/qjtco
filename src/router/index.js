import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    // 品牌
    path: '/brand',
    name: 'Brand',
    // 路由懒加载
    component: () => import('../views/Brand.vue')
  },
  {
    // 魅力青玖
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    // 工具集
    path: '/kit',
    name: 'Kit',
    component: () => import('../views/Kit.vue')
  },
  {
    // 行业资讯
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    // 招募令
    path: '/employ',
    name: 'Employ',
    component: () => import('../views/Employ.vue')
  },
  {
    // 联系我们
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
// 以下为定制网站小程序公众号APP介绍页路由
  {
    // 网站定制
    path: '/webSite',
    name: 'WebSite',
    component: () => import('../views/WebSite.vue')
  },
  {
    // 小程序定制
    path: '/applet',
    name: 'Applet',
    component: () => import('../views/Applet.vue')
  },
  {
    // 公众号定制
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
  {
    // app定制
    path: '/app',
    name: 'App',
    component: () => import('../views/App.vue')
  }
]

const router = new VueRouter({
  mode: 'history',//对比hash模式路由更美观无#
  base: process.env.BASE_URL,
  routes
})

export default router
