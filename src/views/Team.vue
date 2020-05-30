<template>
  <div class="about">
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
