<template>
  <div class="backgroundPage">
    <headr />
    <div class="firstFrame">
      <h1>
        <span>Le tortue Luth</span>
      </h1>
      <div class="species">
        <div class="species__spec">
          <img src="../../img/Species/tortueLuth/tortueLuth.svg" class="nemo" alt />
          <p>
            La tortue luth, Dermochelys coriacea, est la plus grande des sept espèces de tortues marines actuelles et le quatrième plus imposant reptile après trois crocodiliens.
            Malheureusement, elle est aujourd’hui menacée d’extinction et est classée comme « vulnérable » dans la liste rouge de l’UICN (Union internationale pour la conservation de la nature).
          </p>
        </div>
        <div class="species__info">
          <div class="spec">
            <p>
              <span>Profondeur:</span> 0 - 1300 m
            </p>
            <p>
              <span>Durée de vie:</span> + 50 ans
            </p>
            <p>
              <span>Poids/Taille:</span>
              400kg / 160 cm
            </p>
          </div>
          <div class="info">
            <p>
              <span>Zone geographique:</span>Observable dans tous les océans du monde
            </p>
            <br />
            <p>
              <span>Habitude Alimentaire:</span> Se nourri principalement de Méduse, mais aussi de salpes, poissons, oursins, crustacés, algues ...
            </p>
            <br />

            <p>
              <span>Reproduction:</span> Non observé à ce jour, 1000oeufs pondu à l'année. Température d'éclosion minimal 26°C.
              Sexe déterminé en fonction de la température (si T° supérieur à 30°C, toutes les tortues seront de sexe féminin)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="secondFrame">
      <div class="secondFrame__video">
        <iframe
          src="https://www.youtube.com/embed/YGRlIxXoo_s"
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
          <br />C'est la plus grande des sept espèces actuelles de tortues marines,
          la plus grande des tortues de manière générale, et le quatrième plus grand reptile après trois crocodiliens.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headr from "../../components/partials/Head";
export default {
  name: "tortueLuth",
  components: {
    headr
  }
};
</script>

<style>
