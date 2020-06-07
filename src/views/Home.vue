<template>
  <div class="home">
    <img alt="aerosmith" src="https://images6.alphacoders.com/410/thumb-1920-410779.jpg" />
    <HelloWorld msg="Groupe 11" />
    <h2 msg ="RAP / ROCK" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">

.home
  img {
  width: 1200px;
  height: 650px;
}

</style>