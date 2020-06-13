<template>
  <div class="template background1">
    <Template link='/late90s' />
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1994fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .template {
        width: 100%;
        height: 100%;

        div {
            color: white;
            text-align: center;
            font-size: 60px;
        }
    }
    .background1 {
        background-image: url('../img/backgrounds/backgroundearly90s.png');
    }
</style>