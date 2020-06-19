<template>
  <div class="template background1">
    <Template link='/90s' />
    <img id="studio" src="../img/anthraxpublicenemymakingof.png" alt ="anthrax and public enemy"/>
    <h1 class="legend" id="imgtexte">Anthrax and public enemy in backstage during rehearsal</h1>
    <div id='steven__block'>
    <p class="Afont" id="steven">“We’re rock’n’roll, they’re rap; we were bringing more amps,
 guitars and drums, and they’re doing more singing 
and the DJ thing, but that’s the only difference that I saw.”
</p>
    <p class="Afont" id="steven_quote">-Anthrax</p>
    </div>
    <p class="legend" id="fan">The mindset really changed since the first Rap/Rock collaboration, 
    this one was much more friendly and it sounded so.
    </p>
    <img id="arrow__89fact" src="../img/misc/arrow.png" />
    <img id="arrow__88fact" src="../img/misc/arrow.png" />
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
#arrow__88fact {
  position: absolute;
  transform: rotate(95deg);
  width: 5vw;
  right:95vw;
  bottom: 40vh;
}
#arrow__89fact {
  position: absolute;
  transform: rotate(110deg);
  width: 10vw;
  right: 40vw;
  bottom: 43vh;
}
</style>