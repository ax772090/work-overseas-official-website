import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import createStore from './store/store'

import './assets/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/element-ui/element-variables.scss'
import './assets/styles/index.scss'
import * as filters from '@/filters'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/loading-svg/loading-spokes.svg'),
  error: '',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
const store = createStore()

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
