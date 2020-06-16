<template>
    <div width="100%">
        <FirstChapter/>
        <SecondChapter/>
    </div> 
</template>

<script>
import FirstChapter from '@/components/FirstChapter/FirstChapter.vue'
import SecondChapter from '@/components/SecondChapter/SecondChapter.vue'

export default {
    name: 'index',
    components: {
        FirstChapter,
        SecondChapter
    },
}
</script>

<style lang="scss">

</style>

