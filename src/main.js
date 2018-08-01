import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vant 的 包 和 css样式
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
// 注册vant
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
