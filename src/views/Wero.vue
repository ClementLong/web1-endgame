<template>
    <div class="wero" id="wero">
        <ArticleImg
        :title="msg"
        :description="msg2"
        :img="img"
        :filter="filter"
        ></ArticleImg>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                msg2:
                "Lors de l’accueil des manuhiri (visiteurs) un des guerriers de la tribu s’avance pour effectuer une danse: Le Wero.Cette danse de guerrier permet au guerrier de confirmer les intentions des manhuri (visiteurs) et de les dissuader de les attaquer.Il dépose ensuite un rautapu (feuille) que le manuhiri (visiteur) ramasse en signe de paix ",
                msg:"WERO",
                filter:"filter",
             };
        },
    };
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.wero {
  background-image: url("../assets/img/werodance.png");
  @include backgroundImg(no-repeat, cover, top center);
  width: 100vw;
  height: 100vh;
}
</style>