import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIComponentList from './config/UIComponentList'
import './assets/css/reset.scss'
import AxiosPlugin from './utils/request/index'

Vue.use(AxiosPlugin)
UIComponentList.forEach((component) => { Vue.use(component) })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
