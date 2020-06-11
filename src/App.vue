<template>
  <div id="app">
    <!-- <Header />  -->
    <!-- <Chapitre1 /> -->
    <router-view />
  </div>
</template>

<script>
// import Header from "@/components/partials/Header.vue";
// import Chapitre1 from "@/views/Chapitre1.vue";

export default {
  components: {
    // Header
    // Chapitre1
  }
};
</script>

<style lang="scss">
//@import "@/assets/scss/styles.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: $yellow;
  font-family: $montserrat;
}

header {
  display: flex;
}

</style>
