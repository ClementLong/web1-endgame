<template>
  <div class="timeLineHover">
    <img class="timeLineHover__img" src="" alt="" />
    <img class="timeLineHover__img" src="" alt="" />
    <div class="timeLineHover__filter"></div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    icon: String
  }
};
</script>

<style lang="scss" scoped>
.timeLineHover {
  &__filter {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
  }
}
</style>
