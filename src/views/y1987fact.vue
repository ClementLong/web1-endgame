<template>
  <div class="template background1">
    <Template link='/90s' />
    <img id="studio" src="../img/rundmc_aerosmith_makingof.png"/>
    <h1 class="legend" id="imgtexte">Run D.M.C and Aerosmith recording Walk This Way</h1>
    <div id='steven__block'>
    <p class="Afont" id="steven">“Just don’t make fools of us, I don’t <br> want people laughing at us.”</p>
    <p class="Afont" id="steven_quote">Steven Tyler - Aerosmith Singer.</p>
    </div>
    <p class="legend" id="fan">None of the two bands were really 
      fan of the idea of a collaboration, 
      it was TOO new and they thought this wasn’t 
      a good idea.
    </p>
    <img id="arrow__87fact" src="../img/misc/arrow.png" />
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y1987fact',
    components: {
        Template
    }
}
</script>

<style lang="scss">
#studio {
  max-width: 40%;
  margin-top: 80px;
  margin-left: 70px;
}
#imgtexte {
  color: white;
  font-size: 20px;
  margin-left: 100px;
  margin-top: 20px;
}
#steven__block {
  margin-left: 120vh;
  position: absolute;
  top: 25vh;
    #steven {
      color: white;
      font-size: 30px;
    }
    #steven_quote {
      font-size: 24px;
      color: gray;
      position: relative;
      top: 2vh;
    }
}
#fan {
  color: white;
  width: 40vw;
  position: absolute;
  right: 2vw;
  bottom: 25vh;
}
#arrow__87fact {
  position: absolute;
  transform: rotate(95deg);
  width: 10vw;
  right: 40vw;
  bottom: 43vh;
}
</style>