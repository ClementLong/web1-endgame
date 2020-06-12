<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le requin mako</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/requinMako/requinMako.svg" class="nemo" alt />
          <p>
            Requin Mako, l'une des deux espèces de requins rapides, actifs et potentiellement dangereux de la famille des requins maquereaux, Lamnidae.
            Le mako à nageoires courtes se trouve dans toutes les mers tropicales et tempérées, et le mako à nageoires longues est dispersé dans le monde entier dans les mers tropicales.
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span> 0 - 740 m
            </p>
            <p>
              <span>Durée de vie:</span> 28 - 35 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              500kg / 4.5 m
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span> Observable dans tous les océans du monde
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span> Essentiellement des poissons pélagiques comme les thons mais également des requins ainsi que des céphalopodes.
            </p>
            <br />

            <p>
              <span>Reproduction:</span> Ovovivipare avec cannibalisme intra-utérin. De 2 à 21 embryons
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/9kfnPHuHPZs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div class="photo">
          <img src="../../img/Species/requinMako/requinMako1.svg" alt />
          <img src="../../img/Species/requinMako/requinMako2.svg" alt />
        </div>
      </div>
      <div class="secondFrame__tips">
        <p>
          <span>Le saviez-vous?</span>
          <br />Le requin plus rapide du monde, il surgit de nulle part et attaque ses proies par derrière à toute vitesse.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
export default {
  name: "requinMako",
  components: {
    headr
  }
};
</script>

<style>
