<template>
  <div class="team">
    <h1>This is an team page</h1>
    <p v-for="(member, index) in members" :key="index">{{ member }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: ["PA", "Annie", "Priska", "Anthony", "Nicoraux", "Axel"]
    };
  }
};
</script>

<style scoped lang="scss">
.team {
  h1 {
    margin: 0;
    padding: 30px 0;
  }

  p {
    color: $blue;
    margin: 8px;

    &:hover {
      color: $yellow;
      transition: 250ms;
    }
  }
}
</style>
