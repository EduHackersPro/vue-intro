import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

import './assets/scss/main.scss'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
