<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le poisson-clown</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/clown/nemo.svg" class="nemo" alt />
          <p>
            Le poisson clown est un type de poisson qui vit dans les habitats d'eau salée.
            Les poissons-clowns sont généralement des poissons orange très brillants qui ont trois bandes blanches, une à la tête, au milieu et à la queue.
            Si vous regardez de très près, vous remarquerez peut-être qu'il y a de fines lignes noires autour des rayures blanches.
            De plus, les extrémités de leurs nageoires ont une fine bande arrondie noire.
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span> 0 - 12 m
            </p>
            <p>
              <span>Durée de vie:</span> 3 - 5 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              250g / 88 mm
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span> Ocean Pacifique et Indien
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span> petits poissons,des anchois, des mulets, des sardines
            </p>
            <br />

            <p>
              <span>Reproduction:</span> Les poissons-clowns pondent leurs œufs par lots sur le corail,
              la roche ou à côté de l'anémone de mer qu'ils appellent chez eux. Le poisson
              clown mâle construira un nid sur la roche ou le corail près de l'anémone afin d'être
              protégé contre les prédateurs
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/LAkky8eH92I"
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
          <br />Il existe trente espèces de poissons-clowns, toutes faisant partie de la famille des Pomacentridés.
          Une seule espèce est classée dans le genre Premnas, les autres appartenant au genre Amphiprion.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
export default {
  name: "clown",
  components: {
    headr
  }
};
</script>

<style>
