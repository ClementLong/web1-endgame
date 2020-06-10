<template>
  <div>
    <div class="homePage">
      <headr />
      <h1 class="homePage__mainTitle">
        Project
        <br />Abys Life
      </h1>
      <h2 class="homePage__secondTitle">
        L'aventure dans les
        <br />mysterieux fonds marins
      </h2>

      <router-link to="/secondPage">
        <button class="btn">Commencer</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import headr from "../components/partials/Head";
import "../style/main.scss";
export default {
  name: "mainPage",
  components: {
    headr
  },
  data() {
    return {
      isOpen: false // Par defaut le menu n'est pas affiché
    };
  }
};
</script>

<style>
</style>