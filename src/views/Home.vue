<template>
  <div class="home">
    <p class="haveAGoodDay">Bonne journée et bon dév les chefs !</p>
    <img
      alt="aerosmith"
      src="https://images6.alphacoders.com/410/thumb-1920-410779.jpg"
    />
    <HelloWorld msg="Groupe 11" />
    <p>{{ (NomDuProjet = "RAP / ROCK") }}</p>
    <h1>Bonjour</h1>
  </div>
</template>

<script>
// @ is an alias to /src
//import Background from "@/components/Background.vue";

export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.home img {
  width: 100vw;
  height: 650px;
}

.haveAGoodDay {
  text-align: center;
  font-size: 48px;
  color: rgba(134, 221, 34, 0.925);
}

p {
  color: red;
}
</style>
