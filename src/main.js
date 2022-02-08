// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import el from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(el);


var mixin = {
  created: function () {
    this.hello()
    this.say()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    },
    say: function () {

    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: [mixin],
  router,
  components: { App },
  template: '<App/>'
})
