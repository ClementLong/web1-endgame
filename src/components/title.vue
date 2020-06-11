<template>
  <div class="Title">
    <h1>{{ head }}</h1>
    <p>{{ paragraph }}</p>
    <img :src="imageSrc" />
    <div class="dark-filter">{{ filter }}</div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    head: String,
    paragraph: String,
    imageSrc: String,
    filter: String,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 36px;
  line-height: 49px;
  color: red;
  font-family: "Cinzel Decorative";
}
p {
  font-family: "Roboto";
  font-size: 24px;
  color: #ffffff;
}
.dark-filter {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
