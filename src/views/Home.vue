<template>
  <div class="home">
    <img alt="aerosmith" src="../img/home/background.png" />
    <HelloWorld msg="Groupe 11" />
    <p>{{NomDuProjet ="RAP / ROCK"}}</p>
    <h1>Bonjour</h1>
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
  width: 100%;
  height: 50%;
}

</style>