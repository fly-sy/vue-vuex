<template>
  <div class="sub">
    <!-- 直接获取state的值 -->
    {{$store.state.count}}
    <!-- 直接获取getters的值 -->
    {{$store.getters.count}}
    <!-- 使用mapGetters 辅助获取 -->
    subt组件： {{count}}
    subt组件： {{sub}}
  </div>
</template>

<script>
// 使用mapGetters 辅助获取 getters 里面的函数   
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["count", "sub"])
  }
};
</script>

<style  scoped>
</style>