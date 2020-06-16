import Vue from 'vue'
import navbar from './navbar.vue'
import index from './views/index.vue'
import './styles/styles.scss'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
render: h => h(index)
}).$mount('#app')

