import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import Banner from '../../components/Banner.vue'
import SearchBar from './SearchBar.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/normal.css'
import HelpItem from './HelpItem.vue'
import '../../../static/iconfont/iconfont.css'
import Service from '../../components/Service.vue'
import FooterItem from '../../components/Footer.vue'

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bannerinfo: {title: '山木通帮助中心', imgurl: './static/img/macgirl.jpg', txtalign: 'center'}
  },
  components: {HeaderItem, Banner, SearchBar, HelpItem, FooterItem, Service}
})
