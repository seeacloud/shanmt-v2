/**
 * Created by alex on 9/5/17.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer.vue'
import '../../../static/iconfont/iconfont.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Service from '../../components/Service.vue'
import Crsl from './Crsl.vue'
import '../../../static/normal.css'
import SecLeft from '../../components/SecLeft.vue'
import SecRight from '../../components/SecRight.vue'
import Banner from '../../components/Banner.vue'
import ProdIntro from './ProdIntro.vue'
import Improve from './Improve.vue'
import Brands from '../../components/Brands.vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(iView)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    switzer: './static/img/switzerland.jpg',
    secinfo: {
      title: '解决传统加工企业8大难题',
      subtitle: '',
      captitle: '拥抱变革',
      caption: '在互联网和云计算的浪潮下，传统企业要想突围，必须主动迎接变化，进行自我革新',
      btn: '',
      imgurl: './static/img/mac.png',
      push: 0
    },
    secinfo2: {
      title: '',
      subtitle: '',
      captitle: '拥抱变革',
      caption: '在互联网和云计算的浪潮下，传统企业要想突围，必须主动迎接变化，进行自我革新',
      btn: '了解详情',
      imgurl: './static/img/trend.jpg',
      push: 12
    },
    secinfo3: {
      title: '',
      subtitle: '',
      captitle: '拥抱变革',
      caption: '在互联网和云计算的浪潮下，传统企业要想突围，必须主动迎接变化，进行自我革新',
      btn: '了解详情',
      imgurl: './static/img/air-iphone.png',
      push: 12
    },
    bannerinfo: {title: 'banner', imgurl: './static/img/banner-cloud.jpg', txtalign: ''}

  },
  components: {HeaderItem, FooterItem, Service, Crsl, SecLeft, SecRight, Banner, ProdIntro, Improve, Brands}
})
