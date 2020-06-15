<template>
    <div style="width: 100%">
        <div id="chapter1" class="title_chapter">
            <Header/>
            <Title chapter="I" title_chapter="DISCOURS D’HITLER DEVANT LE REICHSTAG" date="30 janvier 1939"/>
            <ChapterText text="Nous avons des centaines de milliers d'enfants de paysans et des classes laborieuses 
            très intelligents. Nous devons les éduquer - en fait nous avons déjà commencé - et nous souhaitons qu'un
             jour, eux et non les représentants d'une race étrangère, puisse occuper les positions dominantes de l'Etat
              en même temps que nos classes éduquées. Et surtout, la culture allemande, comme en témoigne son nom seul, 
              est allemande et non juive, et c'est pourquoi sa direction et sa gestion seront confiées à des membres de 
              notre nation." />
            <Photo/>
        </div>
    </div>
</template>

<router-link to="/firstchapter2"><img src="@/assets/Arrow.png"></router-link>

<script>
import Title from '@/components/Title.vue'
import Header from '@/components/Header.vue'
import ChapterText from '@/components/ChapterText.vue'
import Photo from '@/components/Photo.vue'


export default {
    name: 'FirstChapter',
    components: {
        Title,
        Header,
        ChapterText,
        Photo
    }
}




</script>

<style lang="scss">

* {
    margin: 0;
}

.title_chapter {
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}

#chapter1 {
    background-image: url("../assets/Hitler.png");
}

#chapter2 {
    background-image: url("../assets/himmler.png");
}

#chapter3 {
    background-image: url("../assets/enfer.png");
}

#chapter4 {
    background-image: url("../assets/portesenfer.png");
}

</style>