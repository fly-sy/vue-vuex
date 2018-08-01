<template>
  <div class="app">
    <van-nav-bar title="标题" left-text="返回" left-arrow  fixed/>
    
    <router-view/>

    <van-tabbar v-model="active">
      <!-- 添加to属性 激活路由 -->
      <van-tabbar-item icon="wap-home" to="/home">home</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/vip">vip</van-tabbar-item>
      <van-tabbar-item icon="cart" info="5" to="/cart">cart</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data: ()=>({
    active: 0
  })
};
</script>

<style>
body {
  padding-top: 40px;
}
.app {
}
</style>
