<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import "@/assets/css/vendors/reset.scss";
@import "@/assets/css/global/mixin.scss";
@import "@/assets/css/styles.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
