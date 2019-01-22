import Vue from 'vue'

// 1. 引入vuex
import Vuex, { Store } from 'vuex'

// 2. 注册   

Vue.use(Vuex)

// 3. 实例化
export default new Store({
  // 4.0 定义核心对象
  // state 类似于data  data 是私有的  state是全局
  state: {
    count: 0,
    msg: 'msg'
  },
  // 类似于methods methods 是私有的 mutations 是全局
  mutations: {
    add(state){
      state.count++ 
    }
  },
  // 类似于 computed 和 filters 的结合
  getters: {
    count(state){
      return state.count + '~~~~~'
    },
    msg(state){
      return state.msg 
    }
  }
})