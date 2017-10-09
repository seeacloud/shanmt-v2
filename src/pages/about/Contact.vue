<template>
  <div class="article-con">

    <div class="inner">
      <h1 class="sec-title">联系我们</h1>
      <p class="des">您有任何需求，请随时联系我们，我们期待您的垂询</p>
      <div class="addr-card">
        <Row>
          <Col span="12">
          <div class="grid-content">
            <h2 class="addr-title">深圳总部</h2>
            <p>联系人：徐先生</p>
            <p>咨询电话：0755-8657 5595</p>
            <p>Email：OS@moyasz.com</p>
            <p>QQ: 712381238</p>
            <p>邮编： 518040</p>
            <p>地址：深圳市南山区亿利达创世纪商务中心9A11-9A15</p>
          </div>
          </Col>
          <Col span="12">
          <div class="grid-content">
            <img src="../../../static/img/add-sz.jpg" alt="" style="width: 100%;">
          </div>
          </Col>
        </Row>
      </div>
      <div class="addr-card">
        <Row>
          <Col span="12">
          <div class="grid-content">
            <h2 class="addr-title">长沙基地</h2>
            <p>联系人：戴先生</p>
            <p>咨询电话：0731-8556 3963</p>
            <p>Email：daigz@moyasz.com</p>
            <p>QQ: 527021944</p>
            <p>邮编： 410327</p>
            <p>地址：湖南省长沙市开福区芙蓉中路518号芙蓉城6楼</p>
          </div>
          </Col>
          <Col span="12">
          <div class="grid-content">
            <img src="../../../static/img/add-cs.jpg" alt="" style="width: 100%;">
          </div>
          </Col>
        </Row>
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted: function () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style lang='scss' scoped>
  @import url(../../../static/common.scss);

  .article-con {
    background: #fff;
    padding: 0;
    /*background: url(../../../static/img/address.jpg) no-repeat;*/
    /*background-size: 100% auto;*/
  }

  .inner {
    width: 90%;
    margin-left: 5%;
    padding-top: 20px;
    padding-bottom: 60px;
  }

  .addr-card {
    background: #ffffff;
    padding: 20px;
    margin-bottom: 40px;
    /*-webkit-box-shadow:  2px 2px 10px #ddd;*/
    /*-moz-box-shadow:  2px 2px 10px #ddd;*/
    /*box-shadow:  2px 2px 10px #ddd;*/
    p {
      font-size: 14px;
    }
  }

  .addr-title {
    display: inline-block;
    padding-bottom: 5px;
  }

  .sec-title {
    text-align: center;
    color: #333;
    margin-bottom: 5px;
  }

  .des {
    text-align: center;
    color: #333;
    margin-bottom: 40px;
  }
</style>
