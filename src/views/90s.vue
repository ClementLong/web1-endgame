<template>
  <div class="template background2">
    <Template link='/1992home' />
    <div class="title">
      <h1>Early 90s/Mid 90s :</h1>
      <h1>The Fusion Rock</h1>
    </div>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: '90s',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .background2 {
        background-image: url('../img/backgrounds/backgroundearly90s.png');
    }
</style>