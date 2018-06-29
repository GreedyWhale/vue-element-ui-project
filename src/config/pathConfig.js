/*
  example
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      document.title = '首页'
      next()
    }
  }
*/
import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      document.title = '首页'
      next()
    }
  }
]
