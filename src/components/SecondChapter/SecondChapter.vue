<template>
    <div class="SecondChapter">
        <div id="chapter2" class="title_chapter">
            <Title chapter="II" title_chapter="DISCOURS D’HIMMLER DEVANT LE REICHSTAG " date="27 avril 1940"/>
            <ChapterText text="Himmler donne l’ordre d’aménager un camp de concentration dans les anciennes casernes 
            de l’artillerie polonaise à Oswiecim, rebaptisé Auschwitz. Construit par des Juifs de la ville requis par 
            les nazis, le camp d’Auschwitz reçoit un premier transport de prisonniers polonais, le 14 juin 1940."/>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
import ChapterText from '@/components/ChapterText.vue'

export default {
    name: 'SecondChapter',
    components: {
        Title,
        ChapterText,
    }
}
</script>

<style lang="scss">

.SecondChapter {
    width: 100%;
    height: 100vh;
    position: relative;
}

</style>