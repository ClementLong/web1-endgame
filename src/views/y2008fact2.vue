<template class="2008fact2" >
  <div class="template background4">
    <Template link='/' />
        <p class="fact2_2008__text1 legend">“808s was the first album of that kind, you know? It was the first, like, black new wave album.” <br> - Kanye West</p>

    <img class="fact2_2008__image1" src="../img/2000s/kanye3dpeintured.png" alt="kanye">
    
    <div class="fact2_2008__imageBlock">

        <img class="fact2_2008__imageBlock__image2" src="../img/2000s/newwave.png" alt="newwave">
        <img class="fact2_2008__imageBlock__arrow" src="../img/misc/arrow.png" alt="">
        <p class="fact2_2008__imageBlock__text2 legend">New Wave was the most influent rock mouvment in the 80s</p>    
        
    </div>

    
  </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2008fact2',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.fact2_2008__image1 {

    position: absolute;
    width: 28vw;
    bottom:0;
}

.fact2_2008__imageBlock {

    position: absolute;
    right: 0;
    top: 30vh;



    .fact2_2008__imageBlock__image2 {

        width: 30vw;
    }



    .fact2_2008__imageBlock__text2 {
        position: relative;
        right: -17vw;
        bottom: -5vh;
        width: 18vw
    }
        .fact2_2008__imageBlock__arrow {

        position: relative;
        right: 27vw;
        bottom: -15vh;
        width: 10vw;
        transform: rotate(50deg);
    }
}

.fact2_2008__text1{

    position: absolute;
    left: 25vw;
    top: 20vh;
    width: 35vw;
}


</style>