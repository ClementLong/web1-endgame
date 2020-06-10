<template>
  <div class="team">
    <h1>Les membres de notre équipe</h1>
    <div v-for="(member, index) in members" :key="index">
      {{ member }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        "Louis Fleury",
        "Melvyn Dadure",
        "Romain Danizel",
        "Aymeric Gillet",
        "Loïc Deniel",
        "Nathan Binet",
      ],
    };
  },
};
</script>

<style lang="scss">
.team {
  h1 {
    margin: 0;
    border: 3px red dashed;
  }
}
</style>
