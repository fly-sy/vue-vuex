<template>
  <div class="home">
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="(item,index) in images" :key="index"><img :src="item" alt=""></van-swipe-item>
    </van-swipe>

    <section class="van-doc-demo-block demo-icon">
      <div class="van-col van-col--8">
        <i class="van-icon">
          <img src="../../assets/menu1.png" alt="">
          <!---->
        </i>
        <span>close</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["https://img.yzcdn.cn/2.jpg", "https://img.yzcdn.cn/2.jpg"],
      girds: [
        {src: '',title: 'close'},
      ]
    };
  }
};
</script>

<style lang="" scoped>
.my-swipe {
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}

.demo-icon {
  font-size: 0;
}
.demo-icon img {
  width: 50px;
  height: 50px;
}
.demo-icon .van-col {
  text-align: center;
  height: 100px;
  float: none;
  display: inline-block;
  vertical-align: middle;
}
.demo-icon .van-icon {
  display: block;
  font-size: 32px;
  margin: 15px 0;
  color: rgba(69, 90, 100, 0.8);
}
.demo-icon span {
  font-size: 14px;
}
</style>