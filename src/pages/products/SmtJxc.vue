<template>
  <div class="">

    <page-head :info="headinfo"></page-head>

    <sec-left :info="secinfo"></sec-left>
    <sec-right :info="secinfo2"></sec-right>
    <sec-left :info="secinfo3"></sec-left>
    <sec-right :info="secinfo4"></sec-right>
    <div class="sec">
      <div class="con">
        <h1 class="sec-title">8大核心功能</h1>
        <Row :gutter="20">
          <Col v-for="(item,index) in cards" :key="index" span="6">
          <func-card :info="item"></func-card>
          </Col>
        </Row>
      </div>
    </div>


  </div>
</template>

<script>
  import SecLeft from '../../components/SecLeft.vue'
  import SecRight from '../../components/SecRight.vue'
  import PageHead from '../../components/PageHead.vue'
  import FuncCard from '../../components/FuncCard.vue'
  export default {
    name: 'smtm',
    data () {
      return {
        headinfo: {
          title: '山木通 • 云进销存',
          subtitle: '门店老板的好帮手，门店管理更轻松',
          codeurl: './static/img/app.jpg',
          btn: '立即购买',
          bgimg: 'url(' + require('../../../static/img/2iphone-banner.jpg') + ')' + 'no-repeat center',
          mainimg: './static/img/imac.png'
        },
        secinfo: {
          title: '一站式生意管理工具',
          subtitle: '',
          captitle: '各行各业都支持',
          captions: [
            {des: '● 支持多种行业，满足各行各业的需求'},
            {des: '● 服装鞋帽，建材家具多属性支持'},
            {des: '● 库存管理，自动补货'}
          ],
          btn: '',
          imgurl: './static/img/laptopiphone.jpg'
        },
        secinfo2: {
          title: '',
          subtitle: '',
          captitle: '聪明的管理软件',
          captions: [
            {des: '● 智能补货，保证货源充足'},
            {des: '● 自动报表生成，管理轻松搞定'},
            {des: '● 成本自动核算，收支一目了然'}
          ],
          btn: '',
          imgurl: './static/img/laptop-order-2.jpg'
        },
        secinfo3: {
          title: '',
          subtitle: '',
          captitle: '贴心的资金管理',
          captions: [
            {des: '即使线下资金往来, 也可以方便的录入系统, 让您的账目井井有条, 拒绝糊涂账, 财务状况一目了然'}
          ],
          btn: '',
          imgurl: './static/img/iphone-half/iphone-home.jpg'
        },
        secinfo4: {
          title: '',
          subtitle: '',
          captitle: '订单状态随时记录',
          captions: [
//            {des: '● 采用最新SaaS技术，无需安装维护，节省维护成本'},
//            {des: '● 操作简单，一用就会，上手快'},
            {des: '山木通云管理平台门店版可以手动录入订单状态, 让您可以方便的更新和记录订单状态,订单状态,您心里有数!'}
          ],
          btn: '',
          imgurl: './static/img/iphone-half/iphone-order.jpg'
        },
        cards: [
          {title: '产品管理', des: '直观的产品展示，电脑、手机的应用，随时随地和客户分享', iconcode: '856;'},
          {title: '订货管理', des: '强大的订单管理中心，全流程的订单跟踪展示，让客户、厂家及时了解订单情况', iconcode: '608;'},
          {title: '库存管理', des: '通过库存管理功能进行产品的入库、出库、盘点、库存状况查询', iconcode: '613;'},
//          {title: '生产管理', des: '生产全流程监控，让客户及时掌握订单生产状态，做到心中有数', iconcode: '662;'},
          {title: '资金管理', des: '实时掌握客户资金账户情况，严格控制资金风险，及时督促财务收款', iconcode: '626;'},
          {title: '报表中心', des: '强大的分析报表功能，实现厂家的订货、生产、资金、库存的全方位分析', iconcode: '7d5;'},
          {title: '系统设置', des: '门店账户设置，供应商管理，默认地址配置等', iconcode: '721;'},
          {title: '移动办公', des: '移动化办公(电脑、手机全支持)，老板不在公司也能随时了解公司经营情况', iconcode: '640;'},
          {title: '微信跟踪', des: '关注山木通微信公众号，就能了解到产品生产状态，通过平台进行产品的真伪验证', iconcode: '65a;'}
        ]
      }
    },
    components: {SecLeft, SecRight, PageHead, FuncCard},
    mounted: function () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/common';

  .sec-title {
    padding-bottom: 40px;
  }
</style>
