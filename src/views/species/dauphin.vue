<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le dauphin</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/dauphin/dauphin.svg" class="nemo" alt />
          <p>
            Réputé pour sa sympathie, sa beauté, son intelligence et sa facétie,
            le dauphin est un mammifère très populaire auprès des hommes, souvent friands de nager à ses côtés.
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span>: 0 - 200 m
            </p>
            <p>
              <span>Durée de vie:</span> 15-16 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              75 kg/ 1,5 et 2,5 m
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span> Observable dans tous les océans du monde
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span> petits poissons,des anchois, des mulets, des sardines
            </p>
            <br />

            <p>
              <span>Reproduction:</span> les femelles mettent au monde des petits deux ou trois fois par an
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/vIZKR_PSDwA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="photo">
          <!-- <img src="../../img/Species/nemo1.svg" alt />
          <img src="../../img/Species/nemo2.svg" alt />-->
        </div>
      </div>
      <div class="secondFrame__tips">
        <p>
          <span>Le saviez-vous?</span>
          <br />Il existe trente espèces de poissons-clowns, toutes faisant partie de la famille des Pomacentridés.
          Une seule espèce est classée dans le genre Premnas, les autres appartenant au genre Amphiprion.
        </p>
      </div>
      <!-- <img src="../../img/Species/dauphin/nemo_egg.svg" class="easterEgg" alt /> -->
    </div>
  </div>
</template>

<script>
import headr from "@/components/partials/Head";
export default {
  name: "dauphin",
  components: {
    headr
  }
};
</script>

<style>
