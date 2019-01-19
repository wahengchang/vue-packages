import Vue from "vue";
import App from "./App.vue";
import '@lazy-copilot/datetimepicker/dist/datetimepicker.css'
import noscraperPlugin from '@lazy-copilot/noscraper'
import "./registerServiceWorker";
import router from './router'

Vue.use(noscraperPlugin, () => window.location = 'https://google.com')

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
