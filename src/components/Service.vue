<template>
  <div style="background:#fff;padding:30px 0;">
    <div class="con">
      <Row class="sec-title">
        <h1>做生意，就选山木通·云管理平台</h1>
        <h6>山木通结合多年行业经验，理解中小企业的难点和痛点，专为中小企业进行量身定制开发，提升管理效率，助您业绩腾飞</h6>
        <div style="text-align: center;">
          <a href="buy.html" class="smt-btn-fill">立即购买</a>
        </div>
      </Row>
      <Row class="row">
        <Col class="col" span="8">
        <img :src="img1" alt=""/>
        <h6 class="des">免费试用</h6>
        </Col>

        <Col class="col" span="8">
        <img :src="img2" alt=""/>
        <h6 class="des">人工客户服务支持</h6>
        </Col>

        <Col class="col no-bdr" span="8">
        <img :src="img3" alt=""/>
        <h6 class="des">免费升级</h6>
        </Col>

      </Row>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'service',
    data () {
      return {
        img1: './static/img/30day.png',
        img2: './static/img/7x12.png',
        img3: './static/img/forever.png'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/common";
  .row
  {
    padding: 30px 0 0 0;
  }
  .col
  {
    text-align: center;
    border-right: 1px solid $blue;
    padding: 15px 0 0 0;
    img
    {
      display: inline-block;
      height: 76px;
      width: auto;
      margin-bottom: 10px;
    }
  }
  .no-bdr
  {
    border: none;
  }
.des
{
  text-align: center;
  color: #888;
  font-weight: normal;
}

  .sec-title
  {
    h1
    {
      text-align: center;
      color: $smtred;
      font-weight: normal;
    }
    h6
    {
      width: 60%;
      margin-left: 20%;
      text-align: center;
      color: #666;
      font-weight: normal;
      font-size: 18px;
    }
  }
</style>
