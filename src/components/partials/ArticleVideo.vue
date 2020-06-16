<template>
  <section class="articleVideo articleVideo__container" v-if="isClose">
    <div class="articleVideo__buttonsTop">
      <svg><path d="M0 14.7708C0 6.61313 6.83437 0 15.265 0V0C23.6956 0 30.53 6.61313 30.53 14.7708V14.7708C30.53 22.9285 23.6956 29.5417 15.265 29.5417V29.5417C6.83437 29.5417 0 22.9285 0 14.7708V14.7708Z"
          fill="white"
        /><path fill-rule="evenodd" clip-rule="evenodd" d="M1.42 14.7708C1.42 22.1697 7.61862 28.1676 15.265 28.1676C22.9114 28.1676 29.11 22.1697 29.11 14.7708C29.11 7.37198 22.9114 1.37403 15.265 1.37403C7.61862 1.37403 1.42 7.37198 1.42 14.7708ZM15.265 0C6.83437 0 0 6.61313 0 14.7708C0 22.9285 6.83437 29.5417 15.265 29.5417C23.6956 29.5417 30.53 22.9285 30.53 14.7708C30.53 6.61313 23.6956 0 15.265 0Z"
          fill="#00A0FB"/><path d="M9.01935 9.15976C9.29662 8.89146 9.74617 8.89146 10.0234 9.15976L15.6715 14.6249L21.3195 20.0901C21.5967 20.3584 21.5967 20.7934 21.3195 21.0617C21.0422 21.33 20.5927 21.33 20.3154 21.0617L9.01935 10.1313C8.74207 9.86305 8.74207 9.42805 9.01935 9.15976Z"
          fill="#00A0FB"
        /><path d="M9.01935 20.8188C8.74207 20.5505 8.74207 20.1155 9.01935 19.8472L20.3154 8.91686C20.5927 8.64856 21.0422 8.64856 21.3195 8.91686C21.5967 9.18516 21.5967 9.62015 21.3195 9.88845L10.0234 20.8188C9.74617 21.0871 9.29662 21.0871 9.01935 20.8188Z"
          fill="#00A0FB"
        /></svg><svg class="infoArticle" width="24" height="24" viewBox="0 0 39 39"  fill="none" xmlns="http://www.w3.org/2000/svg"><pathfill-rule="evenodd"clip-rule="evenodd"d="M17.875 13.0001C17.875 12.1031 18.603 11.3751 19.5 11.3751C20.397 11.3751 21.125 12.1031 21.125 13.0001C21.125 13.8971 20.397 14.6251 19.5 14.6251C18.603 14.6251 17.875 13.8971 17.875 13.0001ZM17.875 17.8751C17.875 16.9781 18.603 16.2501 19.5 16.2501C20.397 16.2501 21.125 16.9781 21.125 17.8751V26.0001C21.125 26.8971 20.397 27.6251 19.5 27.6251C18.603 27.6251 17.875 26.8971 17.875 26.0001V17.8751ZM19.4996 32.5002C12.3317 32.5002 6.49962 26.6681 6.49962 19.5002C6.49962 12.3323 12.3317 6.50022 19.4996 6.50022C26.6675 6.50022 32.4996 12.3323 32.4996 19.5002C32.4996 26.6681 26.6675 32.5002 19.4996 32.5002M19.4998 3.25012C10.5249 3.25012 3.24982 10.5252 3.24982 19.5001C3.24982 28.475 10.5249 35.7501 19.4998 35.7501C28.4731 35.7501 35.7498 28.475 35.7498 19.5001C35.7498 10.5252 28.4731 3.25012 19.4998 3.25012"
          fill="white" /><mask  id="mask0" mask-type="alpha"  maskUnits="userSpaceOnUse"  x="3"  y="3"  width="33" height="33"
        ><path fill-rule="evenodd" clip-rule="evenodd" d="M17.875 13.0001C17.875 12.1031 18.603 11.3751 19.5 11.3751C20.397 11.3751 21.125 12.1031 21.125 13.0001C21.125 13.8971 20.397 14.6251 19.5 14.6251C18.603 14.6251 17.875 13.8971 17.875 13.0001ZM17.875 17.8751C17.875 16.9781 18.603 16.2501 19.5 16.2501C20.397 16.2501 21.125 16.9781 21.125 17.8751V26.0001C21.125 26.8971 20.397 27.6251 19.5 27.6251C18.603 27.6251 17.875 26.8971 17.875 26.0001V17.8751ZM19.4996 32.5002C12.3317 32.5002 6.49962 26.6681 6.49962 19.5002C6.49962 12.3323 12.3317 6.50022 19.4996 6.50022C26.6675 6.50022 32.4996 12.3323 32.4996 19.5002C32.4996 26.6681 26.6675 32.5002 19.4996 32.5002M19.4998 3.25012C10.5249 3.25012 3.24982 10.5252 3.24982 19.5001C3.24982 28.475 10.5249 35.7501 19.4998 35.7501C28.4731 35.7501 35.7498 28.475 35.7498 19.5001C35.7498 10.5252 28.4731 3.25012 19.4998 3.25012"
            fill="white"
          /></mask><g mask="url(#mask0)"></g>
      </svg>
    </div>
    <div class="articleVideo__content">
      <article class="articleVideo__text">
        <h3 class="title">{{ title }}</h3>
        <div class="separator"></div>
        <p class="paragraph">{{ text }}</p>
        <div class="quizz__container">
          <StartButton class="quizzButton" msg="RÉPONDRE AU QUIZZ" />
        </div>
      </article>
      <div class="articleVideo__video">
        <video :src="data.video" controls></video>
      </div>
    </div>
  </section>
</template>

<script>
import StartButton from "@/components/start_button.vue";
import axios from "axios";

export default {
  name: "ArticleVideo",
  components: {
    StartButton,
  },
  props: {
    title: String,
    text: String,
    video: null,
  },
  data() {
    return {
      data: null,
      isClose: true,
    };
  },
  mounted() {
    axios
      .get("http://167.71.55.113/api/page/4")
      .then((response) => (this.data = response.data.data));
  },
};
</script>

<style scoped lang="scss">
.articleVideo__container {
  position: relative;
  z-index: 1;
  @include background-boxes;
  border-radius: 0;
  color: $white;
  text-align: left;
  font-family: $montserrat;
  padding: 24px;
  @include flexbox(column, space-between, inherit);

  @include tablet-up {
    height: 100%;
  }

  @include desktop-up {
    height: 95vh;
  }
}

.close {
  display: none;
}

svg {
  cursor: pointer;
}

.articleVideo {
  &__buttonsTop {
    margin: 0 0 24px 0;
    @include flexbox(row, space-between, center);
  }

  &__content {
    padding: 24px 0 0 0;
    height: 100%;
    min-height: 450px;
    @include flexbox(column, space-evenly, center);

    @include tablet-up {
      margin: 0 24px;
    }

    @include desktop-up {
      height: 100vh;
      @include flexbox(row, space-between, center);
    }

    .articleVideo__text {
      height: 100%;
      min-height: 500px;
      @include flexbox(column, center, flex-start);

      @include tablet-up {
        @include flexbox(column, center, flex-start);
      }

      @include desktop-up {
        height: 70vh;
        max-width: 40vw;
      }

      .title {
        margin: 0 0 24px 0;
        font: bold 5vw $montserrat;
        color: $yellow;

        @include tablet-up {
          font-size: rem(32px);
          margin: 0 0 32px 0;
        }
      }

      .paragraph {
        margin: 0 0 24px 0;
        font: normal 3.7vw / 1.5 $montserrat;

        @include tablet-up {
          font-size: rem(22px);
        }

        @include desktop-up {
          margin: 0 0 80px 0;
        }
      }

      .separator {
        margin: 0 0 24px 0;
        width: 50vw;
        max-width: 150px;
        height: 1px;
        background-color: $white;

        @include tablet-up {
          margin: 0 0 32px 0;
        }
      }
      .quizz__container {
        padding: 16px;
        width: 100%;
        @include flexbox(row, center, center);

        .quizzButton {
          margin: 0;
        }
      }
    }

    .articleVideo__video video {
      width: 100%;
      margin: 24px 0 24px 0;

      @include desktop-up {
        width: 45vw;
      }
    }
  }
}
</style>
