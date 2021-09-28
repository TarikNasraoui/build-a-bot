import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store";

import pindDrective from "./shared/pin-directive";
import currencyFilter from "./shared/currency-filter";

Vue.config.productionTip = false;
Vue.directive("pin", pindDrective);
Vue.filter("currency", currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
