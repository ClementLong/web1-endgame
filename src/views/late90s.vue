<template>
  <div class="template background3">
    <Template link='/1999home' />
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