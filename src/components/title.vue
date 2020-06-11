<template>
  <div class="Title">
    <h1>{{ head }}</h1>
    <p>{{ paragraph }}</p>
    <img class="image__item" :src="Source" />
    <div v-if="filter" class="dark-filter">{{ filter }}</div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    head: String,
    paragraph: String,
    filter: String,
    Source: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 36px;
  line-height: 49px;
  color: #ffffff;
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
img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
}
</style>
