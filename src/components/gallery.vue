<template>
  <div class="gallery">
    <div class="gallery__contenair">
      <img class="item1" :src="img1" />
      <img class="item2" :src="img2" />
      <img class="item3" :src="img3" />
      <img class="item4" :src="img4" />
      <img class="item5" :src="img5" />
      <img class="item6" :src="img6" />
      <img class="item7" :src="img7" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
    img7: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}
.item6 {
  grid-area: F1;
}
.item7 {
  grid-area: F2;
}

// .gallery {
//   &__contenair {
//     display: grid;
//     width: 80%;
//     float: right;
//     grid-template-areas:
//       "header header menu menu main main right right"
//       "header header menu menu main main right right"
//       "header header menu menu footer footer F1 F1"
//       "F2 F2 F2 F2 footer footer F1 F1"
//       "F2 F2 F2 F2 footer footer F1 F1";
//   }

// }
</style>
