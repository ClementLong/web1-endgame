<template>
  <div class="home">
    <Form />
    <div class="home__filter"></div>
    <div class="home__footer">
      <p>
        "Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
        Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet
        d'une demande de droit d'utilisation. Ce site ne sera en aucun cas
        exploité à des fins commerciales et ne sera pas publié” © 02.06.2020 -
        19.06.2020 GROUPE 8
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.home {
  background-image: url("../assets/img/backgroundHome.svg");
  @include backgroundImg(no-repeat, cover, top center);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  &__filter {
    background-color: $filterColor;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  &__footer {
    position: absolute;
    padding: 8px;
    z-index: 2;
    background-color: black;
    bottom: 0;
    color: $white;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
