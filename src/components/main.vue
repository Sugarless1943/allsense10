// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { MQTTService } from 'as-utils'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import AsUi from 'as-ui'
import VueMqtt from 'vue-mqtt'
import store from "./com/allsense/store";
import VueEvents from 'vue-event-handler'
// import 'as-icon/style.css'
import './com/allsense/css/index.scss'
import ScadaComps from 'as-scada-comp'

Vue.use(ScadaComps)
Vue.use(VueEvents)

const mqttConnInfo = {
url: MQTTService.getURL(),
userInfo: MQTTService.getCertificate()
}

//ws://www.dev.local/ws

Vue.use(VueMqtt, 'ws://release.allsmart.abc/ws', {
clientId: 'WebClient-' + parseInt(Math.random() * 100000),
username: mqttConnInfo.userInfo.username,
password: mqttConnInfo.userInfo.password
})


// 权限判断
// Vue.prototype.$hasPermission = function (permissionsStr) {
//   return store.state.user.permissions.indexOf(permissionsStr) > -1
// }

// 权限指令
// Vue.directive('has', {
//   bind: function (el, binding) {
//     if (!Vue.prototype.$hasPermission(binding.value)) {
//       el.parentNode.removeChild(el)
//     }
//   }
// })

Vue.config.productionTip = false
Vue.use(AsUi)

/* eslint-disable no-new */
Vue.use(ElementUI, { locale, size: 'medium' })
new Vue({
el: '#app',
router,
store,
components: { App },
template: '<App/>'
})
