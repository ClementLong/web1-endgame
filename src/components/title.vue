<template>
  <div class="title">
    <h1>{{ head }}</h1>
    <p>{{ paragraph }}</p>
    <img :src="imageSrc" />
  </div>
</template>

<script>
export default {
  name: "title",
  props: {
    head: String,
    paragraph: String,
    imageSrc: String,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 36px;
  line-height: 49px;
  color: red;
  font-family: "Cinzel Decorative";
  z-index: 1;
}
p {
  font-family: "Roboto";
  font-size: 24px;
  color: #ffffff;
}
</style>
