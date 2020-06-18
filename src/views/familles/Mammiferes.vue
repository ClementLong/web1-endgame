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
      <router-link to="/clown">En savoir plus</router-link>
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
      .then((response) => (
        this.info = response.forEach(element => {
          console.log(response)
          let titlenode = document.querySelector("div.speciesName");
          console.log(titlenode)
          let ul = titlenode.appendChild(document.createElement("ul"));
          let routerLink = ul.appendChild(document.createElement("a"))
          let lis = ul.appendChild(document.createElement("li"));
          let family = element.family;
          let names = element.name;

          routerLink.setAttribute("href", routes);
          let routes = '/' + `${encodeURI(names)}`;
          routerLink.href = routes;
          lis.textContent += `${family}`;

          routerLink.appendChild(lis);
        })

      ));
  }
};
</script>

<style>
</style>