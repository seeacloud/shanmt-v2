import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import '../../../static/normal.css'
import Router from 'vue-router'
import SmtM from './SmtM.vue'
import SmtAgent from './SmtAgent.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Service from '../../components/Service.vue'
import ServiceAtt from '../../components/ServiceAtt.vue'
import FooterItem from '../../components/Footer.vue'
import Attendance from './Attendance.vue'
import '../../../static/iconfont/iconfont.css'

import SmtOrder from './SmtOrder.vue'
import SmtJxc from './SmtJxc.vue'

Vue.use(Router)
Vue.use(iView)

const routes = [
  {path: '/smtm', component: SmtM},
  {path: '/order', component: SmtOrder},
  {path: '/jxc', component: SmtJxc},
  {path: '/smtagent', component: SmtAgent},
  {path: '/attendance', component: Attendance}
]

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    activeItem: 'products'
  },
  components: {HeaderItem, SmtAgent, SmtM, Service, FooterItem, Attendance, ServiceAtt}
})
