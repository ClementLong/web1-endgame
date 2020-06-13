<template>
        <Audio :video="video"></Audio>
</template>

<script>
    export default {
        data() {
            return{
                img: require("@/assets/img/wero-dance.png"),
                msg2:
                "Lors de l’accueil des manuhiri (visiteurs) un des guerriers de la tribu s’avance pour effectuer une danse: Le Wero.Cette danse de guerrier permet au guerrier de confirmer les intentions des manhuri (visiteurs) et de les dissuader de les attaquer.Il dépose ensuite un rautapu (feuille) que le manuhiri (visiteur) ramasse en signe de paix ",
                msg:"WERO",
                filter:"filter",
                video: require("@/assets/video/video.mp4")
             };
        },
    };
</script>

<style lang="scss" scoped></style>