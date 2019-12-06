import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import {gameData} from './store.js'
import vueBulmaComponents from 'vue-bulma-components'
import store from './store'
Vue.use(vueBulmaComponents)
Vue.use(Buefy)


Vue.config.productionTip = false

new Vue({
  gameData,
  store,
  render: h => h(App)
}).$mount('#app')


