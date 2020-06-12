<template>
  <div class="bgFamilles">
    <naver />
    <div class="mammiferesSpecies">
      <img src="@/img/diver.svg" class="diver" alt />
      <h1>
        <span>Les Mammiferes</span>
      </h1>
      <img src="@/img/Species/orque/orque.svg" class="orque" alt />
      <p class="name1">
        <span>Orque-</span>
      </p>
      <p class="mammiferesDescription txt1">
        Mammifère cétacé marin long de six à neuf mètres, carnivore et agressif. -
        <span>Voir Fiche Descriptif</span>
      </p>

      <img src="@/img/Species/baleineCuvier/baleineCuvier.svg" class="balein" alt />
      <p class="name2">
        <span>Baleine de Cuvier-</span>
      </p>
      <p class="mammiferesDescription txt2">
        Baleine la plus abondante et la plus largement répandue des baleines à bec. C’est aussi l’une des plus observées même si elle reste généralement assez discrète. -
        <span>Voir Fiche Descriptif</span>
      </p>

      <img src="@/img/Species/phoque/phoque.svg" class="phoque" alt />
      <p class="name3">
        <span>Phoque-</span>
      </p>
      <p class="mammiferesDescription txt3">
        Mammifère marin carnassier, de l'ordre des pinnipèdes, au corps fusiforme, à la fourrure rase et veloutée, sans oreille externe, aux membres courts, en forme de nageoires -
        <span>Voir Fiche Descriptif</span>
      </p>
    </div>
  </div>
</template>

<script>
import naver from "@/components/partials/Header";
export default {
  name: "mammiferes",
  components: {
    naver
  }
};
</script>

<style>
</style>