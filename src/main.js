import "@/assets/styles/styles.scss";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import home from "@/component/home.vue";
import welcome from "@/component/welcome.vue";
import articleImg from "@/component/articleImg.vue";
import articleVideo from "@/component/articleVideo.vue";
import button from "@/component/button.vue";
import largeInformations from "@/component/largeInformations.vue";
import moreInformations from "@/component/moreInformations.vue";
import timeLineHover from "@/component/timeLineHover.vue";

Vue.config.productionTip = false;
Vue.component("home", home);
Vue.component("welcome", welcome);
Vue.component("articleImg", articleImg);
Vue.component("articleVideo", articleVideo);
Vue.component("button", button);
Vue.component("largeInformations", largeInformations);
Vue.component("moreInformations", moreInformations);
Vue.component("timeLineHover", timeLineHover);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
