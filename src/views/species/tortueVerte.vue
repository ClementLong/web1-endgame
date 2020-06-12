<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le poisson-clown</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/tortueVerte/tortueVerte.svg" class="nemo" alt />
          <p>
            La tortue verte est présente dans les eaux tropicales de tous les océans, mais plus ou moins rare selon les régions. Sa carapace mesure en moyenne 110 cm et l’animal pèse entre 80 et 130 kg.
            C’est la plus rapide des tortues marines : elle peut atteindre une vitesse de près de 35 km/h.
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span> 0 - 35 m
            </p>
            <p>
              <span>Durée de vie:</span> 60 - 70 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              160kg / 80 cm - 1.3m
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span>principalement près du littoral et autour des îles,
              viveent dans des baies et des rives protégées, en particulier dans les zones avec des herbiers marins. Ils sont rarement observés en pleine mer.
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span> carnivore, elle consomme des petits invertébrés et des œufs de poissons
            </p>
            <br />

            <p>
              <span>Reproduction:</span> Pond une centaine d'œufs dans un trou creusé sur la plage tous les 3 à 6 ans.
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
  name: "tortueVerte",
  components: {
    headr
  }
};
</script>

<style>
