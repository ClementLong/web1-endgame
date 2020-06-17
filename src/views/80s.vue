<template>
  <div class="template background1">
    <audio autoplay loop  id="playAudio">
        <source src="../audio/led-zeppelin-stairway-to-heaven.mp3">
    </audio>
    <Template link='/1987home' />
    <h1 id="title">Mid-80s/Late 80s :<br>The First Steps</h1>
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: '80s',
    components: {
        Template
    }
}
</script>

<style lang="scss">
    .template {
        width: 100%;
        height: 100%;
        margin:0;
        padding:0;
        background-size: cover;
        background-color: black;
    }

    .background1 {
        background-image: url('../img/backgrounds/background80s.png');
    }

    #mid {
        text-align: center;
        padding-top: 250px;
    }
    #title {
        text-align: center;
        color: white;
        padding-top: 150px;
        font-size: 85px;
        line-height: 150%;
    }
</style>