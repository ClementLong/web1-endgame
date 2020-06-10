<template>
  <div>
    <div class="homePage">
      <h1 class="homePage__mainTitle">
        Project
        <br />Abys Life
      </h1>
      <h2 class="homePage__secondTitle">
        L'aventure dans les
        <br />mysterieux fonds marins
      </h2>

      <router-link class="btn" to="/secondPage">Commencer</router-link>
    </div>
  </div>
</template>

<script>
import "../style/main.scss";
export default {
  name: "mainPage",
  data() {
    return {
      isOpen: false // Par defaut le menu n'est pas affiché
    };
  }
};
</script>

<style>
</style>