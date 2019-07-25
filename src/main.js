import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(BootstrapVue)
Vue.use(InfiniteLoading,{
  system: {
    throttleLimit: 1000,
  }
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
