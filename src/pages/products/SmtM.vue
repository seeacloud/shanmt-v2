<template>
  <div class="">

    <page-head :info="headinfo"></page-head>

    <sec-left :info="secinfo"></sec-left>
    <sec-right :info="secinfo2"></sec-right>
    <sec-left :info="secinfo3"></sec-left>
    <sec-right :info="secinfo4"></sec-right>
    <div class="sec">
      <div class="con">
        <h1 class="sec-title">9大核心功能</h1>
        <Row :gutter="20">
          <Col v-for="(item,index) in cards" :key="index" span="8">
          <func-card :info="item"></func-card>
          </Col>
        </Row>
      </div>
    </div>
    <service></service>

  </div>
</template>

<script>
  import SecLeft from '../../components/SecLeft.vue'
  import SecRight from '../../components/SecRight.vue'
  import PageHead from '../../components/PageHead.vue'
  import FuncCard from '../../components/FuncCard.vue'
  import Service from '../../components/Service.vue'

  export default {
    name: 'smtm',
    data () {
      return {
        headinfo: {
          title: '山木通 • 建材家具厂家版',
          subtitle: '山木通团队结合多年丰富的行业管理经验，充分考虑企业的特点，为家具、家居、建材、木业加工生产企业量身定制，解决企业核心管理问题，提供最符合家具、家居、建材、木业加工生产企业的全流程解决方案。',
          codeurl: './static/img/app.jpg',
          codewx: './static/img/smt-wx.jpg',
          btn: '立即购买',
          bgimg: 'url(' + require('../../../static/img/imac-building.jpg') + ')' + 'no-repeat center',
          fontcolor: 'white'
        },
        secinfo: {
          title: '为建材家具企业量身定做',
          subtitle: '山木通团队结合多年的行业管理经验，充分考虑企业的特点，为家具、家居、建材、木业加工生产企业量身定制。',
          captitle: '领先的企业云管理平台',
          captions: [
            {des: '山木通云管理平台电脑端功能完备，可以实现企业的产品管理、销售管理、订货管理、生产管理、库存管理、资金管理、报表中心、移动办公、微信跟踪等功能的所有操作。任意电脑，联网即可操作，无需安装，快捷高效。'}
          ],
          btn: '',
          imgurl: './static/img/laptopiphone.jpg'
        },
        secinfo2: {
          title: '',
          subtitle: '',
          captitle: '功能齐备',
          captions: [
            {des: '● 订单管理、生产管理、库存管理让企业生产经营井井有条'},
            {des: '● 资金管理、报表系统让您对企业运筹帷幄'},
            {des: '● 互联网思维让产品更好的传播'}
          ],
          btn: '',
          imgurl: './static/img/laptop-order-2.jpg'
        },
        secinfo3: {
          title: '',
          subtitle: '',
          captitle: '移动办公',
          captions: [
            {des: '通过山木通手机APP，随时随地管理企业。可以实现企业的产品管理，库存管理 ，订单管理，资金管理等功能的所有操作。'}
          ],
          btn: '',
          imgurl: './static/img/iphone-half/iphone-home.jpg'
        },
        secinfo4: {
          title: '',
          subtitle: '',
          captitle: '无需安装，简单易用',
          captions: [
            {des: '● 采用最新SaaS技术，无需安装维护，节省维护成本'},
            {des: '● 操作简单，一用就会，上手快'},
            {des: '● 数据云端备份，安全可靠，永不丢失'}
          ],
          btn: '',
          imgurl: './static/img/iphone-produce.jpg'
        },
        cards: [
          {title: '产品管理', des: '直观的产品展示，电脑、手机的应用，随时随地和客户分享', iconcode: '856;'},
          {title: '订货管理', des: '强大的订单管理中心，全流程的订单跟踪展示，让客户、厂家及时了解订单情况', iconcode: '608;'},
          {title: '库存管理', des: '通过库存管理功能进行产品的入库、出库、盘点、库存状况查询', iconcode: '613;'},
          {title: '生产管理', des: '生产全流程监控，让客户及时掌握订单生产状态，做到心中有数', iconcode: '662;'},
          {title: '资金管理', des: '实时掌握客户资金账户情况，严格控制资金风险，及时督促财务收款', iconcode: '626;'},
          {title: '报表中心', des: '强大的分析报表功能，实现厂家的订货、生产、资金、库存的全方位分析', iconcode: '7d5;'},
          {title: '系统设置', des: '厂家通知消息发送、部门与员工设置、角色与用户账号维护、生产流程灵活配置、代理商管理、物料清单维护、业务流程配置等。', iconcode: '721;'},
          {title: '移动办公', des: '移动化办公(电脑、手机全支持)，老板不在公司也能随时了解公司经营情况', iconcode: '640;'},
          {title: '微信跟踪', des: '关注山木通微信公众号终端客户就能了解到自己购买的产品生产状态，通过平台进行产品的真伪验证，保护厂家的品牌', iconcode: '65a;'}
        ]
      }
    },
    components: {SecLeft, SecRight, PageHead, FuncCard, Service},
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
