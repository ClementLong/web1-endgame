<template>
<body>
  <div>
    <headerFamilles />
    <h1>
      De nouvelles especes sont apparues !
    </h1>
      </div>
    <div class="speciesName">
      <h2>La tortue Verte</h2>
      <img src alt />
      <router-link to="@/species/clown">En savoir plus</router-link>
    </div>
</body>
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
    let titlenode = document.querySelectorAll('speciesName');
    console.log("query", titlenode);
    var min = this.$route.params.deep_min;
    var max = this.$route.params.deep_max;

    axios
      .get(
        "https://cors-anywhere.zelazna.fr/https://pal.romain-feregotto.fr/?url=list",
        {
          method: "GET",
          headers: { Authorization: "Basic " + btoa("admin:admin") }
        }
      )
      .then(response => response.data.results.species.filter( f => f.deep_min >= parseInt(min, 10) && f.deep_max <= parseInt(max, 10)))
      .then((response) => {
        console.log("hi", typeof(response))
        let familys = response.family;
        console.log("family", familys);
        familys.forEach(element => {
          let ul = titlenode.appendChild(document.createElement("ul"));
          let lis = ul.appendChild(document.createElement("li"));

          lis.textContent = `${element}`;
        })

      });
  }
};
</script>

<style>
</style>