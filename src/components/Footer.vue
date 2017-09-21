<template>
  <div style="background:#eeeeee;">
    <div style="border-bottom:1px solid #dddddd;">
      <div class="con">
        <Row class="row">
          <Col span="6">
          <h6 class="title">新手帮助</h6>

          <a href="help.html">如何使用</a>
          <a href="buy.html">如何购买</a>
          <a href="help.html">如何开单</a>
          <a href="help.html">如何订货</a>
          </Col>

          <Col span="6">
          <h6 class="title">山木通·云管理平台</h6>
          <a href="products.html#/order">云订货平台</a>
          <a href="products.html#/jxc">云进销存</a>
          <a href="products.html#/smtm">建材家具厂家版</a>
          <a href="products.html#/agent">建材家具门店版</a>
          </Col>

          <Col span="6">
          <h6 class="title">关于我们</h6>
          <a href="about.html#/intro">山木通简介</a>
          <!--<a href="">发展历程</a>-->
          <a href="about.html#/service">服务保障</a>
          <a href="about.html#/contact">联系我们</a>
          </Col>

          <Col span="6">
          <div class="code">
            <img :src="code1" alt=""/>
            <div class="des">
                扫码关注山木通
              </div>
          </div>
          <div class="code">
            <img :src="code2" alt=""/>
            <div class="des">
                扫码下载APP
              </div>
          </div>

          </Col>
        </Row>
      </div>
    </div>
    <div>
      <div class="con copyright">
        © 2011-2017 深圳市莫亚科技有限公司 <a href="http://www.miitbeian.gov.cn/">备案号:粤ICP备12008703号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        code1: './static/img/wx.jpg',
        code2: './static/img/app.jpg'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/common";

  .code
  {
    display: inline-block;
    text-align: center;
    float: right;
    margin-left: 20px;
    margin-top: 10px;
    img
    {
      width: 100px;
      display: inline-block;
    }
    .des
    {
      text-align: center;
    }
  }

  .title
  {
    display: block;
    font-weight: normal;
    margin: 15px 0;
  }
  .row
  { padding-bottom: 20px;
    a
    {
      display: block;
      margin: 5px 0;
      color: #888;
    }
    a:hover
    {
      color: $smtred;
    }
  }

  .copyright
  {
    padding: 15px 0;
    color: #888;
    font-size: 12px;
    a
    {
      color: inherit;
      font-size: inherit;
    }
    a:hover
    {
      color: $blue;
    }
  }
</style>
