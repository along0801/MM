import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入初始化样式
import '@/assets/css/reset.css';

// 引入 MUI
import mui from '@/assets/MUI/js/mui.js';
import '@/assets/MUI/css/mui.css';
// 挂载到VUE实例上
Vue.prototype.$mui = mui;

// 引入 muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import '@/assets/muse-icon/material-icons.css';

Vue.use(MuseUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
