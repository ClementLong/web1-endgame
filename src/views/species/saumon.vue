<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le saumon</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/saumon/saumon.svg" class="nemo" alt />
          <p>Le saumon, ce poisson à la chair rose, a une vie plutôt particulière car elle se déroule dans deux eaux, la douce et la salée alors que la grande majorité des poissons vivent dans l'une ou dans l'autre. Il se reproduit et passe sa petite enfance dans l'eau douce et, quand il est en âge, vers deux ans, il s'en va vivre dans l'autre, celle de l'Atlantique ou du Pacifique pendant quelques années. Puis il revient sur son lieu de naissance : s'il est femelle, il pond, s'il est mâle, il bataille avec les autres pour lâcher sa semence sur les œufs fraîchement pondus.</p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span> 0 - 50 m
            </p>
            <p>
              <span>Durée de vie:</span> 2 - 8 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              4 - 35kg / 45 - 60cm
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span> Ocean Arctique Pacifique Atlantique
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span>Crustasés ( crevettes...)
            </p>
            <br />

            <p>
              <span>Reproduction:</span> Pond ses oeuf en eau douce
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/ys7Km8tAe2A"
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
          <br />Après avoir passé des années dans l’océan, le saumon parcourt de phénoménales distances pour remonter la rivière qui l’a vu naître, afin de se reproduire à son tour.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
export default {
  name: "saumon",
  components: {
    headr
  }
};
</script>

<style>
