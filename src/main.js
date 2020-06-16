import Vue from 'vue'
import navbar from './navbar.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(navbar)
}).$mount('#app')
