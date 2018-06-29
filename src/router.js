import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        document.title = '首页'
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: (to, from, next) => {
        document.title = '关于'
        next()
      }
    }
  ]
})
