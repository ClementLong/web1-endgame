<template>
  <div class="template background1">
    <Template link='/1987fact' />
    <h1 id="at">At the time</h1>
    <img src="../img/ghettoblaster.png"/>
    <img src="../img/et.png"/>
    <img src="../img/vanhalen.png"/>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1987joke',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    #at {
        margin-left: auto;
        margin-right: auto;
        width: 6em;
        color: white;
        padding-top: 50px;
        font-size: 45px;
    }
</style>