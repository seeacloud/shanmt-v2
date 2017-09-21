<template>
  <div class="sec">
    <div class="con">
      <div class="title-con">
        <h1>我们的客户</h1>
      </div>

      <Row :gutter="20">
        <Col v-for="(item, index) in brands" :key="index" span="4">
        <div class="card">
          <img :src="item.imgurl" >
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'brands',
    data () {
      return {
        brands: [
          {title: '', imgurl: './static/img/logo/hanrui.jpg'},
          {title: '', imgurl: './static/img/logo/kangming.jpg'},
          {title: '', imgurl: './static/img/logo/senlin-p.jpg'},
          {title: '', imgurl: './static/img/logo/jiaju.jpg'},
          {title: '', imgurl: './static/img/logo/yuanyi.jpg'},
          {title: '', imgurl: './static/img/logo/you.jpg'}
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../static/common';

  .con
  {
    padding: 50px 0;
  }

  .card {
    height: 120px;
    border: 1px solid #eeeeee;
    position: relative;

    img
    {
      width: 80%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

</style>
