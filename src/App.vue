<template>
  <div class="app">
    <!-- {{count}} -->
    <!-- 使用state -->
    {{$store.state.count}}
    <!-- 使用getters -->
    {{$store.getters.count}}
    <!-- 使用辅助函数mapGetters -->
    {{count}}
    <button @click="add">add</button>
    {{msg}}
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  name: "App",
  data: ()=>({
    // count: 1
  }),
  components: {

  },
  methods: {
    // add(){
    //   // 改变data 私有的 count    
    //   // this.count ++ 
    //   // 改变 state 全局的 count   
    //   // this.$store.state.count++  // vuex 不建议这么使用 
    //   this.$store.commit('add')
    // }
    ...mapMutations(['add'])
  },
  computed: {
    count(){
      return this.$store.getters.count  
    },
    msg(){
      return this.$store.getters.msg  
    }
    // 该函数会把getters 里面的函数处理后返回出来 返回的是数组，数组里面的每一项都是函数
    // ...mapGetters(['count','msg'])
  }
};
</script>

<style>
body {
  padding-top: 40px;
}
.app {
}
</style>
