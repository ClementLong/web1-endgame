<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
// // import Header from '@/components/partials/Header.vue'

// export default {
//   components: {
//     Header
//   }
// }
</script>

<style lang="scss">
@import "@/assets/css/vendors/reset.scss";
@import "@/assets/css/global/mixin.scss";
@import "@/assets/css/styles.scss";
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
