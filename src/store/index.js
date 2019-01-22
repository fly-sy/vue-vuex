import Vue from 'vue'

import Vuex, { Store } from 'vuex'

Vue.use(Vuex)
// 购物
const countModule = {
  state: {
    count: 2,
    sub: 1
  },
  mutations: {
    add(state) {
      state.count++
    },
    sub(state) {
      state.count--
    }
  },
  getters: {
    count(state) {
      state.count
    },
    sub(state) {
      state.count
    }
  },
  actions: {
    add(context) {
      context.commit('add')
    }
  }

}

// 列表 

const countModule2 = {
  state: {
    count: 2,
    sub: 1
  },
  mutations: {
    add(state) {
      state.count++
    },
    sub(state) {
      state.count--
    }
  },
  getters: {
    count(state) {
      state.count
    },
    sub(state) {
      state.count
    }
  },
  actions: {
    add(context) {
      context.commit('add')
    }
  }

}

export default new Store({
  // 如果state数据发生变化不要自己去改变 使用mutations 里面的函数辅助调用，如果只是获取的话直接获取就行
  // $store.state.count   
  // $store.state.count++   这种方式不建议  使用  $store.state.commit() 辅助
  modules: {
    countModule,
    countModule2
  }
})