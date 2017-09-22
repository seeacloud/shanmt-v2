<template>
  <div v-on:mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
    <Carousel :autoplay-speed="5000" :autoplay="setting.autoplay" v-model="value3">
      <CarouselItem>
        <div  class="c-item" id="c-1">
          <div class="con">
            <div class="caption">
              <h1 class="title">
                山木通·建材家具厂家版
              </h1>
              <h5 class="des">
                基于移动互联网时代的在线订单跟踪处理及企业内部流程管理于一体的企业SaaS服务平台，致力于帮助企业快速构建自己专属的在线销售、库存、订货、生产、物流、资金监控平台
              </h5>
              <a href="products.html#/smtm" class="smt-btn-white">了解详情</a>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="c-item" id="c-2">
          <div class="con">
            <div class="caption">
              <h1 class="title">
                山木通·建材家具门店版
              </h1>
              <h5 class="des">
                专为中小型商贸/服务/零售企业量身打造的，基于大数据和云计算应用的管理系统。秉承先进的设计理念,云零售将门店、网店、微信商城、自有商城等各种营销渠道中的会员实现全网共享，是门店老板的好帮手
              </h5>
              <a href="buy.html" class="smt-btn-white">立即购买</a>
            </div>
          </div>
        </div>
      </CarouselItem>
      <!--<CarouselItem>-->
        <!--<div class="c-item" id="c-3">-->
          <!--<div class="con">-->
            <!--<div class="caption">-->
              <!--<h1 class="title">-->
                <!--山木通·建材家具厂家版-->
              <!--</h1>-->
              <!--<h5 class="des">-->
                <!--基于移动互联网时代的在线订单跟踪处理及企业内部流程管理于一体的企业SaaS服务平台，致力于帮助企业快速构建自己专属的在线销售、库存、订货、生产、物流、资金监控平台-->
              <!--</h5>-->
              <!--<a href="products.html#/smtm" class="smt-btn-white">了解详情</a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</CarouselItem>-->

    </Carousel>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        value3: 0,
        setting: {
          autoplay: false
        }
      }
    },
    methods: {
      stopAutoPlay: function () {
//        console.log('mouse enter')
        this.setting.autoplay = false
      },
      startAutoPlay: function () {
//        console.log('mouseleave')
        this.setting.autoplay = false
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/common";

  .con
  {
    height: 100%;
    position: relative;
  }
  .caption
  {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
    width: 45%;

    h1,h2,h3,h4,h5,h6
    {
      color: inherit;
    }
    h5
    {
      font-size: 16px;
    }
  }
  .c-item {
    height: 420px;
    background: $blue;
  }

  #c-1 {
    background: url(../../../static/img/apple-all.jpg) no-repeat center;
  }
  #c-2 {
    background: url(../../../static/img/c-2.jpg) no-repeat center;
  }


</style>
