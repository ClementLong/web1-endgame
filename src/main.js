import "@/assets/styles/styles.scss";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ArticleImg from "@/component/ArticleImg.vue";
import ArticleVideo from "@/component/ArticleVideo.vue";
import Button from "@/component/Button.vue";
import LargeInformations from "@/component/LargeInformations.vue";
import MoreInformations from "@/component/MoreInformations.vue";
import TimeLineHover from "@/component/TimeLineHover.vue";

Vue.config.productionTip = false;
Vue.component("ArticleImg", ArticleImg);
Vue.component("ArticleVideo", ArticleVideo);
Vue.component("Button", Button);
Vue.component("LargeInformations", LargeInformations);
Vue.component("MoreInformations", MoreInformations);
Vue.component("TimeLineHover", TimeLineHover);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
