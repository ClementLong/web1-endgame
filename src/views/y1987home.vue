<template>
  <div class="template background1">
    <Template link='/1987joke' />
    <h1 id="date">1987</h1>
    <h2 id="connection">The First Rap/Rock connection</h2>
    <img id="g4" src="../img/group4.png" />
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1987home',
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
        background-image: url('../img/backgrounds/background80s.png');
    }
    #date {
        color: white;
        padding-top: 190px;
        margin-left: 250px;
        font-size: 100px;
    }
    #connection {
        color: white;
        margin-left: 250px;
        font-size: 50px;
    }
    #g4 {
        margin-left: 850px;
        z-index: 2;
    }
</style>