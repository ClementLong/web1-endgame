<template>
  <div class="container_currentChapter">
    <div class="container_chapterAndTitle">
      <div class="container_chapters">
        <p class="currentChapter">{{ currentChapter }}</p>
        <p class="chapter">|{{ chapter }}</p>
      </div>
      <p class="title">{{ title }}</p>
    </div>
    <div class="container_reviewChapter">
      <img src="../assets/ux-kit/control/return_icon.svg" alt="return" />
      <p class="reviewChapter">{{ reviewChapter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterTitleAndReturn",
  props: {
    currentChapter: String,
    chapter: String,
    title: String,
    reviewChapter: String
  }
  // data() {
  //   return {
  //     currentChapter: "01",
  //     chapter: "07",
  //     title: "Mais que ce passe t-il ?",
  //     reviewChapter: "revoir le chapitre précédent"
  //   };
  // }
};
</script>

<style scoped lang="scss">
.container_currentChapter {
  max-width: 300px;
  padding: 8px;
  // background: $dark;
  font-family: $montserrat;

  @include tablet-up {
    max-width: 850px;
  }
}
.container_chapterAndTitle {
  @include flexbox(row, flex-start, center);
}
.container_chapters {
  margin: 8px 8px 8px 0;
  color: $yellow;
  @include flexbox(row, flex-start, baseline);
}

.currentChapter {
  font-size: rem(16px);

  @include tablet-up {
    font-size: rem(32px);
  }

  @include desktop-up {
    font-size: rem(40px);
  }
}
.chapter {
  font-size: rem(8px);

  @include tablet-up {
    font-size: rem(16px);
  }
}

.title {
  color: $white;
  font-size: rem(15px);
  font-weight: bold;

  @include tablet-up {
    font-size: rem(32px);
  }
  @include desktop-up {
    font-size: rem(40px);
  }
}

.container_reviewChapter {
  @include flexbox(row, flex-start, center);

  img {
    margin-right: 8px;
  }

  p {
    color: $white;
    font-size: rem(10px);

    @include tablet-up {
      font-size: rem(14px);
    }
  }
}
</style>