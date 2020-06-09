import Vue from 'vue'
import App from './App.vue'
import router from './router'
import test from './components/test.scss'

Vue.config.productionTip = false

new Vue({
  router,
  test,
  render: h => h(App)
}).$mount('#app')