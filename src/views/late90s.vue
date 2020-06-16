<template>
  <div class="template background3">
    <Template link='/1999home' />
    <div class="title">
      <h1>Late 90s/Early 00s :</h1>
      <h1>The Golden Age</h1>
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'late90s',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .background3 {
        background-image: url('../img/backgrounds/backgroundlate90s.png');
    }
</style>