<template>
  <div class="species">
    <div class="speciesVideoFrame">
      <headr style="position:absolute;" />
      <video loop muted autoplay>
        <source :src="info.video_link" />
      </video>
    </div>
    <!-- // -->
    <div class="species__background">
      <div class="speciesDescription">
        <h1 class="speciesDescription__title">
          <span class="underline">{{info.name}}</span>
        </h1>

        <div class="speciesInformation">
          <div class="speciesInformation__description">
            <p>{{info.description}}</p>
          </div>
          <div class="speciesInformation__image">
            <img :src="info.image_link" :alt="image_alt" />
          </div>
        </div>
      </div>
      <!-- // -->
      <div class="speciesInfo">
        <div class="speciesInfo__first">
          <div class="food">
            <div>
              <p>
                <span class="underline">Habitude Alimentaire:</span>
                {{info.food}}
              </p>
            </div>
            <img src="@/img/Species/food.svg" alt />
          </div>
          <div class="reproduction">
            <div>
              <p>
                <span class="underline">Reproduction:</span>
                {{info.reproduction}}
              </p>
            </div>
            <img src="@/img/Species/reproduction1.svg" alt />
          </div>
          <div class="geo">
            <div>
              <p>
                <span class="underline">Zone geographique:</span>
                {{info.life_area}}
              </p>
            </div>
            <img src="@/img/Species/geo.svg" alt />
          </div>
        </div>
        <div class="speciesInfo__second">
          <div class="img"></div>
        </div>
        <div class="speciesInfo__third">
          <div class="life">
            <img src="@/img/Species/life.svg" alt />
            <div>
              <p>
                <span class="underline">Durée de vie:</span>
                {{info.life_time}} ans
              </p>
            </div>
          </div>
          <div class="depth">
            <img src="@/img/Species/depth.svg" alt />

            <p>
              <span class="underline">Profondeur:</span>
              {{info.deep_min}} - {{info.deep_max}}
            </p>
          </div>
          <div class="size">
            <img src="@/img/Species/size.svg" alt />
            <div>
              <p>
                <span class="underline">Poids/Taille:</span>
                {{info.weight}}kg / {{info.size}}cm
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <div class="more__youKnow">
          <h2>Le saviez-vous?</h2>
          <p>
            N'as jamais été inclus dans le formulaire, arrêtons de vous raconter des bêtises :)
          </p>
        </div>
      </div>
      <div class="backbtn">
        <router-link to="/mammiferes/0/150"><img src="@/img/back.svg" alt /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
import axios from "axios";

export default {
  name: "template",
  components: {
    headr
  },

  data() {
    return {
      info: null
    };
  },
  mounted() {
     var id = this.$route.params.id;
    axios
      .get(
        `https://cors-anywhere.zelazna.fr/https://pal.romain-feregotto.fr/?url=getone&id=${id}`,
        {
          method: "GET",
          headers: { Authorization: "Basic " + btoa("admin:admin") }
        }
      )
      .then(response => (this.info = response.data.results.species));
  }
};
</script>

<style>
