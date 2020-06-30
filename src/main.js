import Vue from 'vue'
import App from './App.vue'
import Inview from 'vueinview'

Vue.config.productionTip = false
Vue.use(Inview)

new Vue({
  render: h => h(App)
}).$mount('#app')

/*
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
*/
