// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery/dist/jquery.slim'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'font-awesome/css/font-awesome.min.css'

let Bootstrap = require('bootstrap')

Vue.use(Bootstrap)

global.jQuery = jQuery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
