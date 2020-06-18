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
import axios from "axios";

export default {
  name: "mammiferes",
  components: {
    headerFamilles
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get(
        "https://cors-anywhere.zelazna.fr/https://pal.romain-feregotto.fr/?url=list",
        {
          method: "GET",
          headers: { Authorization: "Basic " + btoa("admin:admin") }
        }
      )
      .then(response => (console.log(response.data.results.species.filter( f => f.deep_min >= this.$route.params.deep_min && f.deep_max <= this.$route.params.deep_max))));
  }
};
</script>

<style>
</style>