<template>
  <div class="">

    <page-head :info="headinfo"></page-head>

    <sec-left :info="secinfo"></sec-left>
    <div class="base-sec" style="background:#fff;">
      <div class="con">
        <h1 class="sec-title">山木通•云订货平台为客户创造六大价值</h1>
        <img src="../../../static/img/smt-order/airiphone-o.jpg" alt="" style="width:80%;margin-left:10%;">

        <Row :gutter="60">
          <Col span="8" v-for="(item, index) in valuelist" :key="index" class="v-col">
          <div class="col-inner">
            <h4 class="value-title">{{item.title}}</h4>
            <div class="v-des">{{item.des}}</div>
            <div class="value-icons">
              <div v-for="(icon, index) in item.icons" class="vcard" :key="index">
                <i class="iconfont" v-html="'&#xe'+icon.icode+';'"></i>
                <h5 class="icontitle">{{icon.t}}</h5>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="base-sec" style="background:#fff;">
      <div class="con">
        <h1 class="sec-title">连接供货方和订货方</h1>
        <img src="../../../static/img/smt-order/smt-cloud.jpg" alt="" style="width:100%;">
      </div>
    </div>

    <!--<sec-right :info="secinfo2"></sec-right>-->
    <!--<sec-left :info="secinfo3"></sec-left>-->
    <!--<sec-right :info="secinfo4"></sec-right>-->
    <div class="sec" style="background:#fff;">
      <div class="con">
        <div class="sec-title-wrap">
          <h1 class="sec-title">供货方主要功能</h1>
        </div>
        <Row :gutter="20">
          <Col v-for="(item,index) in cards" :key="index" span="8">
          <func-card :info="item"></func-card>
          </Col>
        </Row>
      </div>
    </div>
    <div class="sec" style="background:#fff;">
      <div class="con">
        <div class="sec-title-wrap">
          <h1 class="sec-title">订货方主要功能</h1>
        </div>
        <Row :gutter="20">
          <Col v-for="(item,index) in dingcards" :key="index" span="8">
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
        valuelist: [
          {
            title: '提高订货效率',
            des: '山木通购物体验，极大的提高客户下单效率',
            icons: [
              {t: '购物式', icode: '698'},
              {t: '网店式展示', icode: '602'}
            ]
          },
          {
            title: '强大的订单管理中心',
            des: '全流程的订单跟踪展示，让供货方和订货方随时随地了解订单情况',
            icons: [
              {t: '订单中心', icode: '608'},
              {t: '微信跟踪', icode: '65a'}
            ]
          },
          {
            title: '有效的营销管理',
            des: '把产品推广出去，提高产品人气，提升销售业绩',
            icons: [
              {t: '限时秒杀', icode: '810'},
              {t: '产品促销', icode: '614'},
              {t: '火爆团购', icode: '609'}
            ]
          },
          {
            title: '可靠的资金管理',
            des: '实时掌握客户资金账户情况，严格控制资金风险',
            icons: [
              {t: '资金管理', icode: '604'},
              {t: '账户管控', icode: '610'},
              {t: '准确对账', icode: '608'}
            ]
          },
          {
            title: '移动化办公',
            des: '老板可以随时随地了解公司经营情况',
            icons: [
              {t: '移动办公', icode: '640'},
              {t: '通知中心', icode: '60a'},
              {t: '随时随地', icode: '60b'}
            ]
          },
          {
            title: '提升销售业绩',
            des: '一键产品分享，提高销售业绩。紧密关联代理商，稳固客户关系。',
            icons: [
              {t: '客户稳固', icode: '625'},
              {t: '产品推广', icode: '619'},
              {t: '满意度提升', icode: '62c'}
            ]
          }
        ],
        headinfo: {
          title: '山木通 • 云订货平台',
          subtitle: '智能、高效的订货管理系统，全面提升订货效率，可一键完成销售开单,厂家订货,即时生成应收款、应付款、毛利润等经营报表,库存智能管理,云端存储数据，十八般武艺，样样精通',
          codeurl: './static/img/app.jpg',
          codewx: './static/img/smt-wx.jpg',
          btn: '立即购买',
          bgimg: 'url(' + require('../../../static/img/smt-order/imac-o-banner.jpg') + ')' + 'no-repeat center',
          mainimg: '',
          fontcolor: 'blue'
        },
        secinfo: {
          title: '',
          subtitle: '',
          captitle: '山木通 • 云订货平台',
          captions: [
            {des: '帮助企业快速构建全渠道营销互动平台，结合云计算技术，帮助企业实现商机管控、订单处理、库存管理等业务流程，让管理更轻松'}
          ],
          btn: '',
          imgurl: './static/img/smt-order/2iphone-half.jpg'
        },
        cards: [
          {title: '产品管理', des: '直观的产品展示，电脑、手机的应用，随时随地和客户分享', iconcode: '856;'},
          {title: '订货管理', des: '强大的订单管理中心，全流程的订单跟踪展示，让您及时了解订单情况', iconcode: '608;'},
          {title: '库存管理', des: '通过库存管理功能进行产品的入库、出库、盘点、库存状况查询', iconcode: '613;'},
          {title: '系统设置', des: '通知消息发送、部门与员工设置、角色与用户账号为何', iconcode: '662;'},
          {title: '资金管理', des: '实时掌握客户资金账户情况，严格控制资金风险，及时督促财务收款', iconcode: '626;'},
          {title: '报表中心', des: '强大的分析报表功能，实现订货、资金、库存等方面的全方位分析', iconcode: '7d5;'},
          {title: '营销', des: '多种多样的营销策略，让产品火爆热卖', iconcode: '614;'},
          {title: '移动办公', des: '移动化办公(电脑、手机全支持)，不在公司也能随时了解公司经营情况', iconcode: '640;'},
          {title: '微信跟踪', des: '关注山木通微信公众号，就能随时了解到订单状态，方便快捷', iconcode: '65a;'}
        ],
        dingcards: [
          {title: '产品管理', des: '直观的产品展示，电脑、手机的应用，随时随地和客户分享', iconcode: '856;'},
          {title: '订货管理', des: '强大的订单管理中心，全流程的订单跟踪展示，让您及时了解订单情况', iconcode: '608;'},
//          {title: '库存管理', des: '通过库存管理功能进行产品的入库、出库、盘点、库存状况查询', iconcode: '613;'},
          {title: '资金管理', des: '实时掌握客户资金账户情况，严格控制资金风险，及时督促财务收款', iconcode: '626;'},
          {title: '报表中心', des: '强大的分析报表功能，实现订货、资金、库存等方面的全方位分析', iconcode: '7d5;'},
//          {title: '营销', des: '多种多样的营销策略，让产品火爆热卖', iconcode: '614;'},
          {title: '移动办公', des: '移动化办公(电脑、手机全支持)，不在公司也能随时了解公司经营情况', iconcode: '640;'},
          {title: '微信跟踪', des: '关注山木通微信公众号，就能随时了解到订单状态，方便快捷', iconcode: '65a;'}
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
  .sec-title-wrap{
    text-align: center;
    .sec-title {
      position: relative;
      display: inline-block;
      margin: 0;
      padding: 0;
      height: 100px;
      line-height: 100px;

    }
.sec-title:after{
   position: absolute;
   content: '';
   width: 200px;
   height: 3px;
   background: $smtred;
   right: -220px;
   top: 49px;
 }
    .sec-title:before{
      position: absolute;
      content: '';
      width: 200px;
      height: 3px;
      background: $smtred;
      left: -220px;
      top: 49px;
    }
  }



  .base-sec {
    position: relative;
  }

  .base-sec:after {
    position: absolute;
    content: '';
    display: block;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 1px;
    //background: red;
    background: -webkit-linear-gradient(left, #ffffff, #dddddd, #ffffff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ffffff, #dddddd, #ffffff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ffffff, #dddddd, #ffffff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ffffff, #dddddd, #ffffff); /* 标准的语法（必须放在最后） */
  }

  .col-inner {
    width: 80%;
    margin-left: 20%;
    padding-bottom: 20px;
  }

  .v-des {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
    height: 48px;
    overflow: hidden;
  }

  .value-title {
    color: $smtred;
    margin: 10px 0;
  }

  .sec:after{
    display: none;
  }
  .vcard {
    display: inline-block;
    margin-right: 20px;
    text-align: center;
    i.iconfont {
      display: inline-block;
      color: $smtred;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 38px;
      border: 1px solid $smtred;
      border-radius: 50%;
      font-size: 20px;
      margin-bottom: 5px;
    }
    font-size: 14px;
  }

  .icontitle {
    font-size: 14px;
  }
</style>
