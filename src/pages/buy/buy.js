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
      price: '8000',
      spec: [{des: '● 为家具建材厂家量身定制'}, {des: '● 连接企业、门店、终端客户'}, {des: '● 管销售、管订货、管库存、管生产'}, {des: '● 移动APP、微信公众号，云服务'}],
      link: 'http://shanmt.com/?type=9'
    },
    info2: {
      bg: '#2196F3',
      title: '建材家具门店版',
      price: '990',
      spec: [{des: '● 家具建材门店好帮手'}, {des: '● 营销推广、客户服务、订单管理'}, {des: '● 连接厂家、门店、终端客户'}, {des: '● 移动APP、微信平台、注册即用'}],
      link: 'http://shanmt.com/?type=9'
    },
    info3: {
      bg: '#D19CFF',
      title: '云订货平台',
      price: '5800',
      spec: [{des: '● 全渠道营销互动、云计算'}, {des: '● 商机管控、订单结算、库存管理'}, {des: '● 连接行业上下游，让订单飞起来'}, {des: '● 移动APP，微信平台、注册即用'}],
      link: 'http://shanmt.com/?type=9'
    },
    info4: {
      bg: '#10D6E4',
      title: '云进销存',
      price: '360',
      spec: [{des: '● 最易用的进销存平台'}, {des: '● 支持单体、连锁、多仓库'}, {des: '● 无需安装，免费升级'}, {des: '● 移动APP，微信平台、注册即用'}],
      link: 'http://shanmt.com/?type=9'
    },
    info5: {
      bg: '#ff4a62',
      title: '云考勤',
      price: '600',
      spec: [{des: '● 刷卡、指纹、人脸支持'}, {des: '● 智能的排班系统和规则'}, {des: '● 灵活的假期管理和智能分析报表'}, {des: '● 移动办公，注册即用'}],
      link: 'http://shanmt.com/?type=9'
    }
  },
  components: {HeaderItem, Banner, FooterItem, PriceCard, Service}
})
