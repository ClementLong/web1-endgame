<template>
  <div class="template background1">
    <Template link='/1999context1' />
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1999home',
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
        background-image: url('../img/backgrounds/backgroundlate90s.png');
    }
</style>