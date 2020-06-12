<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le poisson-clown</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/baleinedecuvier/baleinedecuvier.svg" class="nemo" alt />
          <p>
            La Baleine de Cuvier, également connue sous le nom de « baleine à bec d’oie » ou « baleine à bec de Cuvier », est la seule espèce actuelle du genre Ziphius. C’est la baleine la plus abondante et la plus largement répandue des baleines à bec
            . C’est aussi l’une des plus observées même si elle reste généralement assez discrète.
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span> 0 - 3000 m
            </p>
            <p>
              <span>Durée de vie:</span> 54 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              250g / 5-7 m
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span> tout les oceans sauf Arctique
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span> calmars, poulpes et poissons.
            </p>
            <br />

            <p>
              <span>Reproduction:</span> ....
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/lq6Hb7YQlNc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div class="photo">
          <img src="../../img/Species/clown/nemo2.svg" alt />
          <img src="../../img/Species/clown/nemo1.svg" alt />
        </div>
      </div>
      <div class="secondFrame__tips">
        <p>
          <span>Le saviez-vous?</span>
          <br />la baleine à bec la plus abondante et la plus largement répandue
          , mais elle reste généralement discrète et a été peu observée.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
export default {
  name: "baleinedecuvier",
  components: {
    headr
  }
};
</script>

<style>
