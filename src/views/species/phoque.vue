<template>
  <div class="species">
    <div class="speciesVideoFrame">
      <headr style="position:absolute;" />
      <video loop muted autoplay>
        <source src="@/video/clown.mp4" />
      </video>
    </div>
    <!-- // -->
    <div class="species__background">
      <div class="speciesDescription">
        <h1 class="speciesDescription__title">Le poisson-clown</h1>

        <div class="speciesInformation">
          <div class="speciesInformation__description">
            <p>
              Le poisson clown est un type de poisson qui vit dans les habitats d'eau salée. Les poissons-clowns sont généralement des poissons orange très brillants qui ont trois bandes blanches, une à la tête, au milieu et à la queue. Si vous regardez de très près, vous remarquerez peut-être qu'il y a de fines lignes noires autour des rayures blanches.
              De plus, les extrémités de leurs nageoires ont une fine bande arrondie noire.
            </p>
          </div>
          <div class="speciesInformation__image">
            <img src="@/img/Species/clown/nemo2.svg" alt />
          </div>
        </div>
      </div>
      <!-- // -->
      <div class="speciesInfo">
        <div class="speciesInfo__first">
          <div class="food">
            <p>Habitude Alimentaire: petits poissons,des anchois, des mulets, des sardines</p>
            <img src="@/img/Species/food.svg" alt />
          </div>
          <div class="reproduction">
            <p>
              Reproduction: Les poissons-clowns pondent leurs œufs par lots sur le corail.
              Le poisson clown mâle construira un nid sur le corail près de l'anémone afin d'être protégé contre les prédateurs
            </p>
            <img src="@/img/Species/reproduction1.svg" alt />
          </div>
          <div class="geo">
            <p>Zone geographique: Ocean Pacifique et Indien</p>
            <img src="@/img/Species/geo.svg" alt />
          </div>
        </div>
        <div class="speciesInfo__second">
          <div class="img"></div>
        </div>
        <div class="speciesInfo__third">
          <div class="life">
            <img src="@/img/Species/life.svg" alt />
            <p>Durée de vie: 3 - 5 ans</p>
          </div>
          <div class="depth">
            <img src="@/img/Species/depth.svg" alt />

            <p>Profondeur: 0 - 12 m</p>
          </div>
          <div class="size">
            <img src="@/img/Species/size.svg" alt />

            <p>Poids/Taille: 250g / 88 mm</p>
          </div>
        </div>
      </div>
      <div class="more">
        <div class="more__youKnow">
          <h2>Le saviez-vous?</h2>
          <p>
            Il existe trente espèces de poissons-clowns, toutes faisant partie de la famille des Pomacentridés.
            Une seule espèce est classée dans le genre Premnas, les autres appartenant au genre Amphiprion.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
import axios from "axios";
export default {
  name: "phoque",
  components: {
    headr
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/species.json")
      .then(response => (this.info = response.data.data.bpi));
    const ax = axios.create({
      baseURL: "http://localhost:8080/"
    });
    ax.get("species.json");
  }
};
</script>

<style>
