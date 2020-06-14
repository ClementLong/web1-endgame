import "@/assets/css/styles.scss";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import articleImg from "@/components/ArticleImg.vue";
import articleVideo from "@/components/ArticleVideo.vue";
import button from "@/components/Button.vue";
import largeInformations from "@/components/LargeInformations.vue";
import moreInformations from "@/components/MoreInformations.vue";
import timeLine from "@/components/TimeLine.vue";
import Audio from "@/components/Audio.vue";
import Gallery from "@/components/gallery.vue";

Vue.config.productionTip = false;
Vue.component("ArticleImg", articleImg);
Vue.component("ArticleVideo", articleVideo);
Vue.component("Button", button);
Vue.component("LargeInformations", largeInformations);
Vue.component("MoreInformations", moreInformations);
Vue.component("TimeLine", timeLine);
Vue.component("Audio", Audio);
Vue.component("Gallery", Gallery);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
