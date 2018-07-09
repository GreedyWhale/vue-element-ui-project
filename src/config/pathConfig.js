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
const Login = () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')

export default [
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
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      document.title = '登录'
      next()
    }
  }
]
