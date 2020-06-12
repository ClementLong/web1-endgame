<template>
  <div class="timeLineHover">
    <div class="timeLineHover__filter"></div>
    <img class="timeLineHover__img" src="" alt="" />
    <img class="timeLineHover__img" src="" alt="" />
  </div>
</template>

<script>
export default {
  name: "timeLineHover",
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
