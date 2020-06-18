<template>
  <div>
    <headerFamilles />
    <h1>
      De nouvelles especes sont apparues, scroll
      <br />pour les decouvrir !
    </h1>
    <div>
      <h1>La tortue Verte</h1>
      <img src alt />
      <router-link to="/clown">En savoir plus</router-link>
    </div>
  </div>
</template>

<script>
import headerFamilles from "@/components/partials/headerFamilles";

export default {
  name: "mammiferes",
  components: {
    headerFamilles
  }
};
</script>

<style>
</style>