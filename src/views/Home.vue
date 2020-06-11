<template>
<div id="home">
  <a href="/80s"><img src="../img/home/circle.png" alt="Circle" /></a>
</div>
</template>

<script>
// @ is an alias to /src
//import Background from "@/components/Background.vue";

export default {
  name: "Home"
};
</script>

<style lang="scss">
#app {
  background-image: url("../img/home/background.png");
}
a {
  position: absolute;
  top: 70%;
  left: calc((100% - 66px) / 2);
}
</style>