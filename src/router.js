import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/find',
          name: 'find',
          component: () => import('@/components/Contents/Find.vue')
        },
        {
          path: '/favorite',
          name: 'favorite',
          component: () => import('@/components/Contents/Favorite.vue')
        },
        {
          path: '/moment',
          name: 'moment',
          component: () => import('@/components/Contents/Moment.vue')
        },
        {
          path: '/me',
          name: 'me',
          component: () => import('@/components/Contents/Me.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
