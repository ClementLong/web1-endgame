<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pouete.png" />
    <HelloWorld msg="Bienvenue sur notre projet de fin d'année" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
