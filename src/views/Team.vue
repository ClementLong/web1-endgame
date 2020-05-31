<template>
  <div class="team">
    <h1>This is an team page</h1>
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
        'Clément',
        'Bastien'
      ]
    }
  }
}
</script>

<style lang="scss">
.team {

  h1 {
    margin: 0;
  }

}
</style>
