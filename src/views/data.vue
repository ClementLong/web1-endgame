<template>
  <div>{{$route.params.deep_min}}{{$route.params.deep_max}}</div>
</template>

<script>
import axios from "axios";
export default {
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
      .then(response => (console.log(response.data.results.species.filter( f => f.deep_min > this.$route.params.deep_min && f.deep_max < this.$route.params.deep_max))));
  }
}
</script>

<style>

</style>