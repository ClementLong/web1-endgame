<template>
  <div class="backgroundPage">
    <headr />

    <div class="firstFrame">
      <h1>
        <span>Orque</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="@/img/Species/orque/orque.svg" class="nemo" alt />
          <p>
            Le grand requin blanc est l'un des plus grands prédateurs vivant actuellement dans les océans.
            La partie dorsale présente une coloration grise parfois sombre qui contraste avec la blancheur du ventre. Le corps est massif et fusiforme.
            Le museau est allongé et conique et les mâchoires sont équipées de quatre à six rangées de dents triangulaires et crantées, tranchantes comme des lames de rasoir.
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span>
              0 - {{species}} m
            </p>
            <p>
              <span>Durée de vie:</span> 17 - 29 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              7000kg / 9m
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span> les régions arctiques et antarctiques jusqu'aux mers tropicales
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span>
              Carnivore
            </p>
            <br />

            <p>
              <span>Reproduction:</span> L'accouplement des orques commence à l'automne et au début d'hiver.
              Plusieurs groupes d'orques se réunissent alors pour former une harde (troupeau) avec des centaines d'individus.
              La gestation dure normalement 14 mois
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/qg6s_9QfsQo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div class="photo">
          <img src="@/img/Species/orque/orque2.svg" alt />
          <img src="@/img/Species/orque/orque1.svg" alt />
        </div>
      </div>
      <div class="secondFrame__tips">
        <p>
          <span>Le saviez-vous?</span>
          <br />l’Orque est le super prédateur par excellence.
          Située au sommet de la chaine alimentaire, on ne lui connaît aucun ennemi,
          en dehors de l’homme
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";

export default {
  name: "orque",
  components: {
    headr
  }
};
</script>

<style>
