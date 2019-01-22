<template>
  <div class="app">
    App组件:{{$store.state.count}}
    <count></count>
    <subt></subt>
  </div>
</template>

<script>
import Count from './components/Count'
import Subt from './components/Subt'
export default {
  name: "App",
  data: ()=>({
  
  }),
  components: {
    Count,
    Subt
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
