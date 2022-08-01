import Vue from 'vue';
import VueI18n from 'vue-i18n';
import deepmerge from 'deepmerge';

import {
  okendoConfigure,
  OkendoVueI18nPlugin
} from '@okendo/reviews-widget-plus-vue';

import App from './App.vue';
import '@okendo/reviews-widget-plus-vue/dist/assets/css/bundle.min.css';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(OkendoVueI18nPlugin);

const i18n = new VueI18n();

await okendoConfigure(i18n);

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');