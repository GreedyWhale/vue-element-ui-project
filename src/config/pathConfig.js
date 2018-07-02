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
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

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
