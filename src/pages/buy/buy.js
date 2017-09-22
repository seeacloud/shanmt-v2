import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import Banner from '../../components/Banner.vue'
import FooterItem from '../../components/Footer.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/normal.css'
import '../../../static/iconfont/iconfont.css'
import PriceCard from './PriceCard.vue'
import Service from '../../components/Service.vue'

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bannerinfo: {title: '山木通报价体系', imgurl: './static/img/girls.jpg', txtalign: ''},
    info1: {
      bg: '#F5A623',
      title: '建材家具厂家版',
      price: '9999',
      spec: [{des: '● 为家具建材厂家量身定制'}, {des: '● 数据云端备份，永不丢失'}, {des: '● 9大核心功能'}],
      link: 'xxx'
    },
    info2: {
      bg: '#2196F3',
      title: '建材家具门店版',
      price: '990',
      spec: [{des: '● 门店老板的好帮手'}, {des: '● 无需安装部署'}, {des: '● 快捷高效的管理生意'}],
      link: 'ssss'
    },
    info3: {
      bg: '#D19CFF',
      title: '云订货平台',
      price: '9999',
      spec: [{des: '● 全新的互联网思维'}, {des: '● 为中小型企业量身打造'}, {des: '● 基于云计算的管理系统'}],
      link: 'ccc'
    },
    info4: {
      bg: '#10D6E4',
      title: '云进销存',
      price: '9999',
      spec: [{des: '● 电脑、手机数据同步'}, {des: '● 支持管理多仓库'}, {des: '● 免安装免维护免升级'}],
      link: 'eeee'
    },
    info5: {
      bg: '#ff4a62',
      title: '云考勤',
      price: '9999',
      spec: [{des: '● 电脑、手机数据实时同步'}, {des: '● 支持管理多仓库、'}, {des: '● 免安装免维护免升级'}],
      link: 'eeee'
    }
  },
  components: {HeaderItem, Banner, FooterItem, PriceCard, Service}
})
