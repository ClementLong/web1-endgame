<template>
  <div class="articleText">
          <h1>{{ title }}</h1>
          <hr />
          <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
    name: "ArticleText",
    props: {
    title: String,
    text: String,
  }
}
</script>

<style scoped lang="scss">
.articleText {

  h1 {
    font-size: $mobileH1;
    font-weight: 600;
    color: $yellow;
  }

  p {
    font-size: $mobileP;
    color: $white;
    line-height: 1.5;
    margin: 24px 0px 8px 0px;
  }
}

@include tablet-up {

    .articleText {

    p {
        font-size: rem(18px);
        text-align: left;
        padding-bottom: 24px;
      }
    h1 {
        font-size: rem(40px);
        text-align: left;
      }

      hr {
        width: 40%;
        display: block;
        margin: 16px 0 40px;
        text-align: left;
      }
    }
}
</style>