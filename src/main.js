// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import './common/stylus/index.less';
Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bc15af89a27cd5dc084b733/sell';
axios.defaults.withCredentials = true;// 让ajax携带cookie
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
