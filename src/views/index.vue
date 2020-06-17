<template>
    <div width="100%">
        <FirstChapter/>
        <SecondChapter/>
        <ThirdChapter/>
        <FourthChapter/>
    </div> 
</template>

<script>
import FirstChapter from '@/components/FirstChapter/FirstChapter.vue'
import SecondChapter from '@/components/SecondChapter/SecondChapter.vue'
import ThirdChapter from '@/components/ThirdChapter/ThirdChapter.vue'
import FourthChapter from '@/components/FourthChapter/FourthChapter.vue'


export default {
    name: 'index',
    components: {
        FirstChapter,
        SecondChapter,
        ThirdChapter,
        FourthChapter
    },
}
</script>

<style lang="scss">

</style>

