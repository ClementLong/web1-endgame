<template>
    <div class="template background4">
        <Template link='/2008fact' />
        <div class="home2008__text">
            <p class= "home2008__text__year title">2008</p>
            <p class= "home2008__text__fact textG">Heartbroken Kanye West brings vulnerability to Hip Hop </p>
        </div>
        <div  >
            <img class= "home2008__image" src="../img/kanyewest.png" alt="kanye">   
        </div>
    </div>
</template>

<script>

import Template from './template.vue'

export default {
    name: 'y2008home',
    components: {
        Template
    }
}
</script>

<style lang="scss">

.home2008__image {
    position: absolute;
    right: 5vw;
    width: 30%;
    bottom: 0;
    z-index: 0;
}

.home2008__text {
    display:block;
    width: 50vw;
    padding-left: 5vw;
    padding-top: 15vh;
}

.home2008__text__year {

    font-size: 96px;
    text-align: left;
}

.home2008__text__fact {

    font-size: 54px;
}
</style>