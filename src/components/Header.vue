<template>
    <div class="media">
            <div v-on:click="ok" class="img_noactivate photo"></div>
            <div class="img_noactivate video"></div>
    </div>
</template>

<script>
export default {
    methods: {
        ok: function (){
            EventTarget('.photo_noactivate').classList.toggle('photo_activate')
        }
    }
}


</script>

<style lang="scss">
.media {
    height: 110px;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    top: 5px;
    left: 10px;
    background: transparent;
    z-index: 0;

    .photo {
        background-image: url("../assets/photo.svg");
        background-size: cover;
    }

    .video {
        background-image: url("../assets/video.svg");
        background-size: cover;
    }

    .img_noactivate {
        height: 55px;
        width: 55px;
        cursor: pointer;
    }
}
</style>