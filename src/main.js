import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from 'axios'
axios.defaults.baseURL = '/api'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
