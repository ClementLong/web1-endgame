<template>
  <div class="template background5">
    <Template link='/2016fact' />
    <div class = "container title">
      <h1>2016</h1>
      <h2>SoundCloud Rap: The revival</h2>
    </div>
    <div class="fact1_2016__images">
      <img class="fact1_2016__image__image1" src="../img/2010s/xxxtentacion.png" alt="xxxtentacion">
      <img class="fact1_2016__image__image2" src="../img/2010s/lilpeep.png" alt="lil peep">
    </div>

  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2016fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">
.container {
    margin-left: 15%;
}
.fact1_2016__images {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100vw;
  bottom:0;
  overflow: hidden;


  .fact1_2016__image__image1 {
    position: relative;
    width: 25%;
    bottom: 0;
    left: -3vw;
  }

  .fact1_2016__image__image2 {
    position: relative;
    width: 40%;
    height: 20%;
  }
}

</style>