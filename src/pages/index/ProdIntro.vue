<template>
  <div style="background:#ffffff;">
    <div class="con">
      <div class="sec-head">
        <h1 class="sec-title">山木通 让管理更轻松</h1>
        <h5 class="sub-title">山木通运用国际先进的互联网、云计算、大数据等技术，结合高品质的客户服务，已为多家企业提供了企业运营与管理完整的互联网解决方案。</h5>
      </div>
      <Row style="margin-top:40px;">
        <Col span="2">
        &nbsp;
        </Col>
        <Col v-for="(item,index) in icons" :key="index" span="4">
        <div class="card" id="icon-smt-m" @mouseenter="changeBan(item.name)">
          <i class="iconfont" v-html="item.iconcode"></i>
          <h5>{{item.title}}</h5>
        </div>
        </Col>
      </Row>
    </div>

    <div v-for="(item,index) in banners" :key="index" v-show="active==item.name"
         :style="{background:item.bgimg}">
      <div class="con" style="padding:40px 0;">
        <Row>
          <Col span="14">
          <h4 class="ban-title">{{item.title}}</h4>
          <h6 v-for="(info, index) in item.infoarr" :key="index" class="ban-spec">
            {{info.des}}
          </h6>

          <a :href="item.link" class="smt-btn-fill">{{item.linkname}}</a>
          <!--<a href="" class="smt-btn-fill">免费试用</a>-->
          </Col>
          <Col span="10" class="col-r">
          <img :src="item.imgurl" alt=""/>
          <span style="color:#fff;">{{item.imgdes}}</span>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'prodintro',
    data () {
      return {
        active: 'smt-m',
        icons: [
          {title: '建材家具厂家版', iconcode: '&#xe624;', name: 'smt-m'},
          {title: '建材家具门店版', iconcode: '&#xe601;', name: 'smt-agent'},
          {title: '云订货平台', iconcode: '&#xe600;', name: 'smt-order'},
          {title: '云进销存', iconcode: '&#xe652;', name: 'smt-jxc'},
          {title: '云考勤', iconcode: '&#xe687;', name: 'smt-ykq'}
        ],
        banners: [
          {
            title: '山木通·建材家具厂家版',
            name: 'smt-m',
            infoarr: [
              {des: '● 针对家具建材行业的特点进行优化，量身打造适合家具建材厂家的功能'},
              {des: '● 家具建材企业全流程管控'},
              {des: '● 跨平台，支持移动办公'}
            ],
            bgimg: 'url(' + require('../../../static/img/smt-m-banner-black.jpg') + ')' + 'no-repeat center',
            link: 'buy.html',
            linkname: '立即购买',
            imgurl: './static/img/app.jpg',
            imgdes: '扫码下载山木通APP'
          },
          {
            title: '山木通·建材家具门店版',
            name: 'smt-agent',
            infoarr: [
              {des: '● 8大实用功能，门店管理好帮手'},
              {des: '● 领先的SaaS平台，数据云端备份，客户资料永不丢失'},
              {des: '● 支持移动办公，生意从不掉线'}
            ],
            bgimg: 'url(' + require('../../../static/img/mac2.jpg') + ')' + 'no-repeat center',
            link: 'buy.html',
            linkname: '立即购买',
            imgurl: './static/img/app.jpg',
            imgdes: '扫码下载山木通APP'
          },
          {
            title: '山木通·云订货平台',
            name: 'smt-order',
            infoarr: [
              {des: '● 专为中小型商贸/服务/零售企业量身打造的，基于大数据和云计算应用的订货系统。'},
              {des: '● 满足电商多平台多店铺多仓库经营特性，并提供系统、业务及全链路监控系统'},
              {des: '● 多元化的会员促销及营销体系，帮助企业提升业绩，突破营销瓶颈'}
            ],
            bgimg: 'url(' + require('../../../static/img/businesstop.jpg') + ')' + 'no-repeat center',
            link: 'buy.html',
            linkname: '立即购买',
            imgurl: './static/img/app.jpg',
            imgdes: '扫码下载山木通APP'
          },
          {
            title: '山木通·云进销存',
            name: 'smt-jxc',
            infoarr: [
              {des: '● 支持行业拓展，满足不同行业需求'},
              {des: '● 电脑端、手机端、微信端、APP多端通用，数据实时同步'},
              {des: '● 一键成本重算，解决多批次产品库存成本不同的问题'}
            ],
            bgimg: 'url(' + require('../../../static/img/jxc-black.jpg') + ')' + 'no-repeat center',
            link: 'buy.html',
            linkname: '立即购买',
            imgurl: './static/img/app.jpg',
            imgdes: '扫码下载山木通APP'
          },
          {
            title: '山木通·云考勤',
            name: 'smt-ykq',
            infoarr: [
              {des: '● 支持行业拓展，满足不同行业需求'},
              {des: '● 电脑端、手机端、微信端、APP多端通用，数据实时同步'},
              {des: '● 一键成本重算，解决多批次产品库存成本不同的问题'}
            ],
            bgimg: 'url(' + require('../../../static/img/clockin-dark.jpg') + ')' + 'no-repeat center',
            link: 'buy.html',
            linkname: '立即购买',
            imgurl: './static/img/app.jpg',
            imgdes: '扫码下载山木通APP'
          }
        ]
      }
    },
    methods: {
      changeBan: function (name) {
        this.active = name
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/common";

  .con {
    /*background: #ffffff;*/
    padding: 20px 0;
  }

  .sec-head {
    width: 84%;
    margin-left: 8%;
  }

  .sec-title {
    text-align: center;
    color: $smtred;
  }

  .card {
    position: relative;
    text-align: center;
    padding: 20px 0;
  }

  .card:after {
    position: absolute;
    display: none;
    content: '';
    height: 0;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .iconfont {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    font-size: 60px;
    border: 2px solid $smtred;
    text-align: center;
    line-height: 120px;
    color: $smtred;
    margin-bottom: 20px;
  }

  .card:hover {
    background: $smtred;
    color: #ffffff;
    .iconfont {
      color: #ffffff;
      border-color: #ffffff;
    }
  }

  .card:hover:after {
    display: block;
    border-top: 10px solid $smtred;
  }

  #smt-m {
    background: url(../../../static/img/banner-cloud.jpg) no-repeat center;
  }

  .col-r {
    text-align: center;
    img {
    }
    span {
      display: block;
      text-align: center;
    }
  }

  .ban-title {
    margin-bottom: 20px;
    color: #fff;
  }

  .ban-spec {
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }

  h4
  {
    color: #000000;
  }
</style>
