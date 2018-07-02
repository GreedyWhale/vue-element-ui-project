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

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      document.title = '首页'
      next()
    }
  }
]
