import Vue from "vue";
import App from "./App.vue";
import noscraper from "./plugins/noscraper"

Vue.config.productionTip = false;

Vue.use(noscraper, () => {console.log('[WARNING] scraper is browsing ...')})

new Vue({
  render: h => h(App)
}).$mount("#app");
