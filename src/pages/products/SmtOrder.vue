<template>
  <div class="">

    <page-head :info="headinfo"></page-head>

    <sec-left :info="secinfo"></sec-left>
    <sec-right :info="secinfo2"></sec-right>
    <sec-left :info="secinfo3"></sec-left>
    <sec-right :info="secinfo4"></sec-right>
    <div class="sec">
      <div class="con">
        <h1 class="sec-title">功能强大 得心应手</h1>
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
          title: '山木通 • 云订货平台',
          subtitle: '智能、高效的订货管理系统，全面提升订货效率',
          codeurl: './static/img/app.jpg',
          btn: '立即购买',
          bgimg: 'url(' + require('../../../static/img/smt-order/imac-o-banner.jpg') + ')' + 'no-repeat center',
          mainimg: '',
          fontcolor: 'blue'
        },
        secinfo: {
          title: '聪明的订货管理系统',
          subtitle: '电脑手机全支持，指尖上办公，让各环节工作从此化繁为简，是您可靠的智能伙伴',
          captitle: '先进的订货管理系统',
          captions: [
            {des: '山木通云订货平台可一键完成销售开单,订货,即时生成应收款、应付款、毛利润等经营报表,库存智能管理,云端存储数据，十八般武艺，样样精通'}
          ],
          btn: '',
          imgurl: './static/img/smt-order/laptopiphone-o.jpg'
        },
        secinfo2: {
          title: '',
          subtitle: '',
          captitle: '灵活的库存管理',
          captions: [
//            {des: '● 订单管理、生产管理、库存管理让企业生产经营井井有条'},
//            {des: '● 资金管理、报表系统让您对企业运筹帷幄'},
            {des: '山木通云订货平台对库存管理进行了升级,实现灵活的库存管理。智能高效的完成繁琐的库存管理,让库存管理更轻松'}
          ],
          btn: '',
//          imgurl: './static/img/laptop-order-2.jpg'
          imgurl: './static/img/smt-order/laptopiphone-o-stock.jpg'

        },
        secinfo3: {
          title: '',
          subtitle: '',
          captitle: '贴心的资金管理',
          captions: [
            {des: '即使线下资金往来, 也可以方便的录入系统, 让您的账目井井有条, 拒绝糊涂账, 财务状况一目了然'}
          ],
          btn: '',
          imgurl: './static/img/smt-order/laptopiphone-o-money.jpg'
        },
        secinfo4: {
          title: '',
          subtitle: '',
          captitle: '实用的报表系统',
          captions: [
//            {des: '● 采用最新SaaS技术，无需安装维护，节省维护成本'},
//            {des: '● 操作简单，一用就会，上手快'},
            {des: '山木通云管理平台门店版可以手动录入订单状态, 让您可以方便的更新和记录订单状态,订单状态,您心里有数!'}
          ],
          btn: '',
          imgurl: './static/img/smt-order/laptopiphone-o-report.jpg'
        },
        cards: [
          {title: '产品管理', des: '直观的产品展示，电脑、手机的应用，随时随地和客户分享', iconcode: '856;'},
          {title: '订货管理', des: '强大的订单管理中心，全流程的订单跟踪展示，让您及时了解订单情况', iconcode: '608;'},
          {title: '库存管理', des: '通过库存管理功能进行产品的入库、出库、盘点、库存状况查询', iconcode: '613;'},
//          {title: '生产管理', des: '生产全流程监控，让客户及时掌握订单生产状态，做到心中有数', iconcode: '662;'},
          {title: '资金管理', des: '实时掌握客户资金账户情况，严格控制资金风险，及时督促财务收款', iconcode: '626;'},
          {title: '报表中心', des: '强大的分析报表功能，实现订货、资金、库存等方面的全方位分析', iconcode: '7d5;'},
          {title: '营销', des: '多种多样的营销策略，让产品火爆热卖', iconcode: '614;'},
          {title: '移动办公', des: '移动化办公(电脑、手机全支持)，不在公司也能随时了解公司经营情况', iconcode: '640;'},
          {title: '微信跟踪', des: '关注山木通微信公众号，就能随时了解到订单状态，方便快捷', iconcode: '65a;'}
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
