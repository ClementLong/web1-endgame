<template>
  <div>
    <div class="secondPage">
      <naver />
      <div class="information">
        <h2
          class="information__secondTitle"
        >Bienvenu dans les abysses, scroll vers le bas si tu es pret à découvrir les mysteres des profondeurs !</h2>
        <h2
          class="information__secondTitle"
        >Ce périple interactif te feras découvrir un monde insoupçonné.</h2>
        <h2 class="information__secondTitle">
          La ou la lumiere s'arrete,
          <br />la vie commence..
        </h2>
        <div class="btn-scroll">
          <h2 class>Dive deeper</h2>
          <img src="@/img/scroll-down.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import naver from "../components/partials/Header.vue";
export default {
  name: "secondPage",
  components: {
    naver
  }
};
</script>

<style>
</style>