import Vue from 'vue'
import App from './App.vue'
import router from './router' // '/index'생략
import store from './store'

// BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//mdi 아이콘
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'

// BootstrapVue
Vue.use(BootstrapVue)

////mdi 아이콘
Vue.use(mdiVue, { icons: mdijs })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
