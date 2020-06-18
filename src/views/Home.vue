<template>
  <div class="home">
    <router-link @click.native="isOpen = false" to="/info_shark">
      <img alt="Vue logo" src="../assets/logo.png" />
    </router-link>
    <img alt="Vue logo" src="../assets/logo.png" />
    <rty msg="Welcome to your final web1 projet" />
  </div>
</template>

<script>
// @ is an alias to /src
import rty from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    rty
  }
};
</script>
<style lang="css">
</style>
