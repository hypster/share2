// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
Vue.config.productionTip = false
require('@fortawesome/fontawesome-free/css/all.css')
/* eslint-disable no-new */
Vue.filter('slice', function (value) {
  return value.slice(0, 5)
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
