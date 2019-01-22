<template>
  <div class="count">
    <input type="text" v-model="$store.state.countModule.count">
    Count组件:{{$store.state.countModule.count}}
    <button @click="add">add</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  data: () => ({

  }),
  methods: {
    add(){
      // this.$store.commit('add')
      this.$store.dispatch('add')
    }
    // ...mapMutations(['add','sub'])
  }
};
</script>

<style scoped>

</style>