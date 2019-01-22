import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // 5. 挂载在 Vue 实例上
  store,
  components: { App },
  template: '<App/>'
})
