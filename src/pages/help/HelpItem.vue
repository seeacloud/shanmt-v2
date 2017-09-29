<template >
  <div style="background:#fff;">

    <div class="con">
      <div style="color:#a9263f;border-bottom:1px solid #bbbbbb;font-size:28px;padding:80px 0 15px 0;">常见问题</div>
      <div v-for="(item,index) in items" :key="index" class="item">
        <h4 class="title">{{item.title}}</h4>
        <p v-for="(p,index) in item.desgroup" :key="index" class="des">{{p.des}}</p>
        <i class="iconfont">&#xe660;</i>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'helpitem',
    data () {
      return {
        items: [
          {
            title: '山木通是什么？',
            desgroup: [
              {des: '山木通.云管理平台是提供给家具、家居、建材、木业加工生产销售企业及门店的云管理平台，是基于移动互联网时代的在线订单跟踪处理及企业内部流程管理于一体的企业SaaS服务平台，致力于帮助企业快速构建自己专属的在线销售、库存、订货、生产、物流、资金监控平台，帮助客户开拓销售渠道，解决代理商和厂家之间的沟通困难、高效进行订单跟踪处理，加速资金回笼和风险管理，让管理更轻松。'},
              {des: '道，解决代理商和厂家之间的沟通困难、高效进行订单跟踪处理，加速资金回'},
              {des: '生产销售企业及门店的云管理平台，是基于移动互联网时代的在线订单跟踪处理及企业内部流程管理于一体的企业SaaS服务平台，致力于帮助企业快速'}
            ]
          },
          {
            title: '山木通门店版是什么？',
            desgroup: [
              {des: '目前，以木业加工为主业的工厂，面临着代理商分散、报价计算耗时、订单跟踪管理等诸多困难。'},
              {des: '随着云计算的兴起，互联网的普及，以及B2B用户需求的多样化、个性化，传统的订货管理也顺应潮流迈入云计算时代。推出一款面向企业用户的订货与生产管理平台，通过系统能帮助企业快速构建专属的订货与生产管理平台，变得尤为重要！'},
              {des: '山木通产品应运而生，解决木业加工企业代理商和厂家的订货以及生产过程控制，打通企业与上下游的关系，稳固代理商渠道，让生意更简单。'}
            ]
          },
          {
            title: '山木通能做什么？',
            desgroup: [
              {des: '山木通的订单管理中心能实时推送订单处理状态，订单管理变得简单方便。山木通平台实现生产状态的全流程监控，随时推送生产进度，不进工厂也能实时了解生产状态。山木通全新的购物式下单，让交易更加便捷，提高订货效率，助您销量大涨！手机上就可以随时管理订单，指导生产，无论你在出差还是在度假，公司运营状况一手掌握。'}
            ]
          }

        ]
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/common';

  .item {
    position: relative;
    border-bottom: 1px solid #dddddd;
    margin: 40px 0 0 0;
    padding-left: 40px;
    padding-bottom: 20px;
  }

  .title {
    color: #333333;
  }

  .des {
    font-size: 18px;
    text-indent: 0;
    color: #777;
  }

  .iconfont {
    position: absolute;
    display: inline-block;
    font-size: 32px;
    top: -5px;
    left: 0;
    color: $smtred;
  }
</style>
