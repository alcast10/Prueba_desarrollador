import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSwal from "vue-swal";

//sass
import "./sass/app.scss";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSwal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
