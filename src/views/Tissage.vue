<template>
    <div class="tissage">
        <sliderContainer
        :img1="img1"
        :img2="img2"
        :img3="img3"
        :img4="img4"
        :img5="img5"
        :img6="img6"
        :img7="img7"
        :title="title"
        :description="description"
        ></sliderContainer>
    </div>
</template>

<script>
export default {
  data() {
    return {
        img1: require("@/assets/img/1.png"),
        img2: require("@/assets/img/2.png"),
        img3: require("@/assets/img/3.png"),
        img4: require("@/assets/img/4.png"),
        img5: require("@/assets/img/5.png"),
        img6: require("@/assets/img/6.png"),
        img7: require("@/assets/img/7.png"),
        title: "HANGI",
        description:
            " Le hangi traditionnel consiste à envelopper des paniers d’aliments contenant de la viande et des légumes (patate douce, maïs, carotte…) et de les cuire dans un trou creusé dans le sol au fond duquel sont déposées des pierres volcaniques chauffées. On trouve ce plat le plus souvent dans la région de Rotorua au Nord de l’île..",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.tissage {
  background: grey;
  width: 100vw;
  height: 100vh;
}
</style>