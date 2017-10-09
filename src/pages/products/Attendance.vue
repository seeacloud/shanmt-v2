<template>
  <div class="">

    <page-head :info="headinfo"></page-head>

    <div style="background:#eee;">
      <div class="con">
        <img src="../../../static/img/attendance/att-1.png" alt="" style="width:100%;">
      </div>
    </div>
    <div style="background:#4A90E2;">
      <div class="con">
        <img src="../../../static/img/attendance/att-2.png" alt="" style="width:100%;">
      </div>
    </div>
    <div style="background:#eee;">
      <div class="con">
        <img src="../../../static/img/attendance/att-3.png" alt="" style="width:100%;">
      </div>
    </div>
    <service-att></service-att>

  </div>
</template>

<script>
  import SecLeft from '../../components/SecLeft.vue'
  import SecRight from '../../components/SecRight.vue'
  import PageHead from '../../components/PageHead.vue'
  import FuncCard from '../../components/FuncCard.vue'
  import ServiceAtt from '../../components/ServiceAtt.vue'
  export default {
    name: 'smtm',
    data () {
      return {

        headinfo: {
          title: '山木通 • 云考勤',
          subtitle: '山木通云考勤是建立在云计算基础之上的全新考勤服务平台，能够平滑跨越互联网，覆盖PC互联网和移动互联网，整合企业信息化应用的核心要素： 计算、存储、网络、终端，面向各类企业用户，提供整体个性化考勤服务。',
          codeurl: '',
          btn: '立即购买',
          bgimg: 'url(' + require('../../../static/img/attendance/att-banner.jpg') + ')' + 'no-repeat center',
          mainimg: '',
          fontcolor: 'white'
        },
        secinfo: {
          title: '',
          subtitle: '',
          captitle: '聪明的订货管理系统',
          captions: [
            {des: '帮助企业快速构建全渠道营销互动平台，结合云计算技术，帮助企业实现商机管控、订单处理、库存'}
          ],
          btn: '',
          imgurl: './static/img/smt-order/2iphone-full.jpg'
        }
      }
    },
    components: {SecLeft, SecRight, PageHead, FuncCard, ServiceAtt},
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

  .col-inner{
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
.value-title{
  color: $smtred;
  margin: 10px 0;
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
