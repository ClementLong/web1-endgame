<template>
  <div id="app">
    <router-view />
    <mainPage />
  </div>
</template>

<script>
import mainPage from "@/views/MainPages.vue";
export default {
  components: mainPage
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
