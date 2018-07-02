
import Vue from 'vue';
import app from './App.vue'

import './css/cssreset.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './js/router'
import * as filters from './js/filter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
Vue.use(VueResource);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));//注册过滤器

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
});