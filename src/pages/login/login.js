import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer.vue'
import Banner from '../../components/Banner.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ContentLogin from './Login.vue'
import ContentSignup from './Signup.vue'
import '../../../static/iconfont/iconfont.css'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(iView)

const routes = [
  {path: '/login', component: ContentLogin},
  {path: '/signup', component: ContentSignup}
]

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    bannerinfo: {title: '用户注册/登录', imgurl: './static/img/macwhite.jpg', txtalign: ''}

  },
  components: {HeaderItem, FooterItem, Banner, ContentSignup, ContentLogin}
})
